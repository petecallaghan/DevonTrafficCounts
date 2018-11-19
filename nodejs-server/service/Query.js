'use strict';

const DefaultLimit = 10
const DefaultSkip = 0

function valueOrDefault(value, defaultValue) {
  return value ? value : defaultValue;
}

function add(query, name, value, operator){
    if (value){
        if (query) {
            return '&'+name+operator+value;
        }
        return name+operator+value;
    }
    return '';
}

function addEqual(query, name, value){
    return add(query, name, value, '=');
}

function addLessThan(query, name, value){
    return add(query, name, value, '<=');
}

function addGreaterThan(query, name, value){
    return add(query, name, value, '>=');
}

/**
 * Encapsulates a query for junction links
 */
module.exports = class Query {
    constructor(skip, limit, aADFYear, cP,
        estimation_method, region, localAuthority, road, roadCategory, startJunction, 
        endJunction, minEasting, maxEasting, minNorthing, maxNorthing){
        this.skip = valueOrDefault(skip, DefaultSkip);
        this.limit = valueOrDefault(limit, DefaultLimit);
        this.aADFYear = valueOrDefault(aADFYear, 0);
        this.cP = valueOrDefault(cP, 0);
        this.estimation_method = valueOrDefault(estimation_method, '');
        this.region = valueOrDefault(region, '');
        this.localAuthority = valueOrDefault(localAuthority, '');
        this.road = valueOrDefault(road, '');
        this.roadCategory = valueOrDefault(roadCategory, '');
        this.startJunction = valueOrDefault(startJunction, '');
        this.endJunction = valueOrDefault(endJunction, '');
        this.minEasting = valueOrDefault(minEasting, 0);
        this.maxEasting = valueOrDefault(maxEasting, 0);
        this.minNorthing = valueOrDefault(minNorthing, 0);
        this.maxNorthing = valueOrDefault(maxNorthing, 0);
        this.qs = '';
    }

    toString(){
        if (this.qs) {
            return this.qs;
        }
        var qs = ''
        qs = qs + addEqual(qs, 'aadfyear', this.aADFYear);
        qs = qs + addEqual(qs, 'cp', this.cP);
        qs = qs + addEqual(qs, 'estimation_method', this.estimation_method);
        qs = qs + addEqual(qs, 'region', this.region);
        qs = qs + addEqual(qs, 'localauthority', this.localAuthority);
        qs = qs + addEqual(qs, 'road', this.road);
        qs = qs + addEqual(qs, 'roadcategory', this.roadCategory);
        qs = qs + addEqual(qs, 'startjunction', this.startJunction);
        qs = qs + addEqual(qs, 'endjunction', this.endJunction);
        qs = qs + addGreaterThan(qs, 'mineasting', this.minEasting);
        qs = qs + addLessThan(qs, 'maxeasting', this.maxEasting);
        qs = qs + addGreaterThan(qs, 'minnorthing', this.minNorthing);
        qs = qs + addLessThan(qs, 'maxnorthing', this.maxNorthing);
        this.qs = qs;
        return qs;
    }
}
