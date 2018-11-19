'use strict';


/**
 * queries the database of junction links
 * By passing in the appropriate options, you can query subsets of the junction links, filtering the data set 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * aadfyear Integer filter by year of junction link counts (optional)
 * cp Integer filter by count point (optional)
 * estimation_method String filter by estimation method (optional)
 * region String filter by region (optional)
 * localauthority String filter by Local Authority (optional)
 * road String filter by Road (optional)
 * roadcategory String filter by Road Category (optional)
 * startjunction String filter by Start Junction (optional)
 * endjunction String filter by End Junction (optional)
 * mineasting Integer filter by minimum easting coordinate (optional)
 * maxeasting Integer filter by maximum easting coordinate (optional)
 * minnorthing Integer filter by minimum northing coordinate (optional)
 * maxnorthing Integer filter by maximum northing coordinate (optional)
 * returns junctionLinks
 **/
exports.queryJunctions = function(skip,limit,aadfyear,cp,estimation_method,region,localauthority,road,roadcategory,startjunction,endjunction,mineasting,maxeasting,minnorthing,maxnorthing) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "total" : 2,
    "query" : "skip=1",
    "count" : 2,
    "limit" : 10,
    "skip" : 0
  },
  "junctionLinks" : [ {
    "v6ormoreaxleartichgv" : 1630,
    "allmotorvehicles" : 53717,
    "v2axlerigidhgv" : 1854,
    "roadcategory" : "TM",
    "carstaxis" : 41341,
    "northing" : 112172,
    "v4or5axlerigidhgv" : 173,
    "localauthority" : "Devon",
    "road" : "M5",
    "aadfyear" : 2000,
    "v3or4axleartichgv" : 1014,
    "easting" : 303700,
    "linklength_miles" : 4.16,
    "motorcycles" : 137,
    "lightgoodsvehicles" : 4851,
    "cp" : 6023,
    "estimation_method_detailed" : "Manual count",
    "v5axleartichgv" : 1935,
    "linklength_km" : 6.7,
    "endjunction" : "27",
    "allhgvs" : 7004,
    "estimation_method" : "Counted",
    "pedalcycles" : 0,
    "startjunction" : "28",
    "v3axlerigidhgv" : 398,
    "region" : "South West",
    "busescoaches" : 384
  }, {
    "v6ormoreaxleartichgv" : 1630,
    "allmotorvehicles" : 53717,
    "v2axlerigidhgv" : 1854,
    "roadcategory" : "TM",
    "carstaxis" : 41341,
    "northing" : 112172,
    "v4or5axlerigidhgv" : 173,
    "localauthority" : "Devon",
    "road" : "M5",
    "aadfyear" : 2000,
    "v3or4axleartichgv" : 1014,
    "easting" : 303700,
    "linklength_miles" : 4.16,
    "motorcycles" : 137,
    "lightgoodsvehicles" : 4851,
    "cp" : 6023,
    "estimation_method_detailed" : "Manual count",
    "v5axleartichgv" : 1935,
    "linklength_km" : 6.7,
    "endjunction" : "27",
    "allhgvs" : 7004,
    "estimation_method" : "Counted",
    "pedalcycles" : 0,
    "startjunction" : "28",
    "v3axlerigidhgv" : 398,
    "region" : "South West",
    "busescoaches" : 384
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

