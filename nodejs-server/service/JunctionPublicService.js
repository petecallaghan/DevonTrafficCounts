'use strict';

const Meta = require('./ResponseMeta');
const Query = require('./Query');
const JunctionLinks = require('../repository/postgres/JunctionLinks');
const AWSPool = require('../repository/postgres/AWSPool');

/**
 * Queries the database of junction links
 * By passing in the appropriate options, you can query subsets of the junction links, filtering the data set 
 * 
 * returns JunctionLinks
 **/
module.exports.queryJunctions = function queryJunctions(skip, limit, aADFYear, cP,
  estimation_method, region, localAuthority, road, roadCategory, startJunction,
  endJunction, minEasting, maxEasting, minNorthing, maxNorthing) {

  var query = new Query(skip, limit, aADFYear, cP, estimation_method, region, 
    localAuthority, road, roadCategory, startJunction, endJunction, minEasting, 
    maxEasting, minNorthing, maxNorthing)

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

