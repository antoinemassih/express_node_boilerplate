
'use strict';
const {
 Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
    class vendors extends Model {
static associate(models) {

  }
 }
 vendors.init({
  vendor_id: DataTypes.INTEGER,
   vendor_name: DataTypes.STRING
  }, {
   sequelize,
   modelName: 'vendors',
  });
  return vendors;
 };




