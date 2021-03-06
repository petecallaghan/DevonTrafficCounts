'use strict';

/**
 * Count all the records in the database
 */
module.exports.countAll = function countAll(pool) {
    return pool.query(`SELECT COUNT(*) AS Total FROM junctionlinks`)
        .then((res) => { 
            return parseInt(res.rows[0].total); 
        });
}

/**
 * Count all the records in the database that match the query ignoring skip and limit
 */
module.exports.countAllQuery = function countAllQuery(pool, query) {
    return pool.query(`SELECT COUNT(*) AS Total FROM junctionlinks WHERE 
        (($1=0) IS TRUE OR aadfyear=$1) AND 
        (($2=0) IS TRUE OR cp=$2) AND 
        (($3='') IS TRUE OR estimation_method=$3) AND 
        (($4='') IS TRUE OR region=$4) AND 
        (($5='') IS TRUE OR localauthority=$5) AND 
        (($6='') IS TRUE OR road=$6) AND 
        (($7='') IS TRUE OR roadcategory=$7) AND 
        (($8='') IS TRUE OR startjunction=$8) AND 
        (($9='') IS TRUE OR endjunction=$9) AND 
        (($10=0) IS TRUE OR easting>=$10) AND 
        (($11=0) IS TRUE OR easting<=$11) AND 
        (($12=0) IS TRUE OR northing>=$12) AND 
        (($13=0) IS TRUE OR northing<=$13)`, 
            [query.aADFYear, query.cP, query.estimation_method, 
                query.region, query.localAuthority, query.road, query.roadCategory, 
                query.startJunction, query.endJunction, query.minEasting, 
                query.maxEasting, query.minNorthing, query.maxNorthing])
        .then((res) => { 
            return parseInt(res.rows[0].total); 
        });
}

/**
 * Return the subset of junction links defined by the query
 */
module.exports.queryJunctions = function queryJunctions(pool, query) {
    return pool.query(`SELECT * FROM junctionlinks WHERE 
        (($3=0) IS TRUE OR aadfyear=$3) AND 
        (($4=0) IS TRUE OR cp=$4) AND 
        (($5='') IS TRUE OR estimation_method=$5) AND 
        (($6='') IS TRUE OR region=$6) AND 
        (($7='') IS TRUE OR localauthority=$7) AND 
        (($8='') IS TRUE OR road=$8) AND 
        (($9='') IS TRUE OR roadcategory=$9) AND 
        (($10='') IS TRUE OR startjunction=$10) AND 
        (($11='') IS TRUE OR endjunction=$11) AND
        (($12=0) IS TRUE OR easting>=$12) AND 
        (($13=0) IS TRUE OR easting<=$13) AND 
        (($14=0) IS TRUE OR northing>=$14) AND 
        (($15=0) IS TRUE OR northing<=$15)
        OFFSET $1 LIMIT $2`, 
            [query.skip, query.limit, query.aADFYear, query.cP, query.estimation_method, 
                query.region, query.localAuthority, query.road, query.roadCategory, 
                query.startJunction, query.endJunction, query.minEasting, 
                query.maxEasting, query.minNorthing, query.maxNorthing])
        .then((res) => { 
            return res.rows; 
        });
  }
