'use strict';

/**
 * Construct the response meta data
 */
module.exports.buildMeta = function buildMeta(query, count, total){
    return {
        "query" : query.toString(),
        "total" : total,
        "skip" : query.skip,
        "count" : count,
        "limit" : query.limit
    };
}