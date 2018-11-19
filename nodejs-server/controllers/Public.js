'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/JunctionPublicService');

module.exports.queryJunctions = function queryJunctions (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  var aadfyear = req.swagger.params['aadfyear'].value;
  var cp = req.swagger.params['cp'].value;
  var estimation_method = req.swagger.params['estimation_method'].value;
  var region = req.swagger.params['region'].value;
  var localauthority = req.swagger.params['localauthority'].value;
  var road = req.swagger.params['road'].value;
  var roadcategory = req.swagger.params['roadcategory'].value;
  var startjunction = req.swagger.params['startjunction'].value;
  var endjunction = req.swagger.params['endjunction'].value;
  var mineasting = req.swagger.params['mineasting'].value;
  var maxeasting = req.swagger.params['maxeasting'].value;
  var minnorthing = req.swagger.params['minnorthing'].value;
  var maxnorthing = req.swagger.params['maxnorthing'].value;
  Public.queryJunctions(skip,limit,aadfyear,cp,estimation_method,region,localauthority,road,roadcategory,startjunction,endjunction,mineasting,maxeasting,minnorthing,maxnorthing)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
