'use strict';


/**
 * queries the database of junction links
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
 * returns List
 **/
exports.queryJunctions = function(skip,limit,aADFYear,cP,estimation_method,region,localAuthority,road,roadCategory,startJunction,endJunction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "LinkLength_km" : 6.7,
  "Estimation_method" : "Counted",
  "AllHGVs" : 7004,
  "PedalCycles" : 0,
  "LightGoodsVehicles" : 4851,
  "AADFYear" : 2000,
  "V2AxleRigidHGV" : 1854,
  "V6orMoreAxleArticHGV" : 1630,
  "Northing" : 112172,
  "LinkLength_miles" : 4.16,
  "V3AxleRigidHGV" : 398,
  "CarsTaxis" : 41341,
  "LocalAuthority" : "Devon",
  "RoadCategory" : "TM",
  "Road" : "M5",
  "CP" : 6023,
  "AllMotorVehicles" : 53717,
  "V5AxleArticHGV" : 1935,
  "Estimation_method_detailed" : "Manual count",
  "StartJunction" : "28",
  "BusesCoaches" : 384,
  "EndJunction" : "27",
  "Motorcycles" : 137,
  "V3or4AxleArticHGV" : 1014,
  "Region" : "South West",
  "Easting" : 303700,
  "V4or5AxleRigidHGV" : 173
}, {
  "LinkLength_km" : 6.7,
  "Estimation_method" : "Counted",
  "AllHGVs" : 7004,
  "PedalCycles" : 0,
  "LightGoodsVehicles" : 4851,
  "AADFYear" : 2000,
  "V2AxleRigidHGV" : 1854,
  "V6orMoreAxleArticHGV" : 1630,
  "Northing" : 112172,
  "LinkLength_miles" : 4.16,
  "V3AxleRigidHGV" : 398,
  "CarsTaxis" : 41341,
  "LocalAuthority" : "Devon",
  "RoadCategory" : "TM",
  "Road" : "M5",
  "CP" : 6023,
  "AllMotorVehicles" : 53717,
  "V5AxleArticHGV" : 1935,
  "Estimation_method_detailed" : "Manual count",
  "StartJunction" : "28",
  "BusesCoaches" : 384,
  "EndJunction" : "27",
  "Motorcycles" : 137,
  "V3or4AxleArticHGV" : 1014,
  "Region" : "South West",
  "Easting" : 303700,
  "V4or5AxleRigidHGV" : 173
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

