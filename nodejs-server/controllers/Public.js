'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/PublicService');

module.exports.queryJunctions = function queryJunctions (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  var aADFYear = req.swagger.params['AADFYear'].value;
  var cP = req.swagger.params['CP'].value;
  var estimation_method = req.swagger.params['Estimation_method'].value;
  var region = req.swagger.params['Region'].value;
  var localAuthority = req.swagger.params['LocalAuthority'].value;
  var road = req.swagger.params['Road'].value;
  var roadCategory = req.swagger.params['RoadCategory'].value;
  var startJunction = req.swagger.params['StartJunction'].value;
  var endJunction = req.swagger.params['EndJunction'].value;
  Public.queryJunctions(skip,limit,aADFYear,cP,estimation_method,region,localAuthority,road,roadCategory,startJunction,endJunction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
