'use strict';

const Meta = require('./ResponseMeta');
const Query = require('./Query');
const JunctionLinks = require('../repository/postgres/JunctionLinks');
const AWSPool = require('../repository/postgres/AWSPool');

/**
 * Queries the database of junction links
 * By passing in the appropriate options, you can query subsets of the junction links, filtering the data set 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * aADFYear Integer filter by year of junction link counts (optional)
 * cP Integer filter by count point (optional)
 * estimation_method String filter by estimation method (optional)
 * region String filter by region (optional)
 * localAuthority String filter by Local Authority (optional)
 * road String filter by Road (optional)
 * roadCategory String filter by Road Category (optional)
 * startJunction String filter by Start Junction (optional)
 * endJunction String filter by End Junction (optional)
 * returns JunctionLinks
 **/
module.exports.queryJunctions = function queryJunctions(skip, limit, aADFYear, cP,
  estimation_method, region, localAuthority, road, roadCategory, startJunction,
  endJunction) {

  var query = new Query(skip, limit, aADFYear, cP, estimation_method, region, 
    localAuthority, road, roadCategory, startJunction, endJunction)

  /**
   * Ideally the total and the junction links subset would be returned in a single
   * transaction. 
   * 
   * Currently they are retrieved as distinct queries, theoretically opening the 
   * opportunity to be out of sync, although the static nature of the data means
   * that this is not an issue in practice. 
   */
  return JunctionLinks.countAllQuery(AWSPool.Pool, query)
    .then(total => {
      return JunctionLinks.queryJunctions(AWSPool.Pool, query)
        .then(junctions => {
          return {
            "meta" : Meta.buildMeta(query, junctions.length, total),
            "junctionLinks" : junctions,
          };
      });
    });
  }

