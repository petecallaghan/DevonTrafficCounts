'use strict';

const DefaultLimit = 10
const DefaultSkip = 0

function valueOrDefault(value, defaultValue) {
  return value ? value : defaultValue;
}

function add(query, name, value){
    if (value){
        if (query) {
            return ' and '+name+'='+value;
        }
        return name+'='+value;
    }
    return '';
}

/**
 * Encapsulates a query for junction links
 */
module.exports = class Query {
    constructor(skip, limit, aADFYear, cP,
        estimation_method, region, localAuthority, road, roadCategory, startJunction, 
        endJunction){
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
        this.qs = '';
    }

    toString(){
        if (this.qs) {
            return this.qs;
        }
        var qs = ''
        qs = qs + add(qs, 'aadfyear', this.aADFYear);
        qs = qs + add(qs, 'cp', this.cP);
        qs = qs + add(qs, 'estimation_method', this.estimation_method);
        qs = qs + add(qs, 'region', this.region);
        qs = qs + add(qs, 'localauthority', this.localAuthority);
        qs = qs + add(qs, 'road', this.road);
        qs = qs + add(qs, 'roadcategory', this.roadCategory);
        qs = qs + add(qs, 'startjunction', this.startJunction);
        qs = qs + add(qs, 'endjunction', this.endJunction);
        this.qs = qs;
        return qs;
    }
}
