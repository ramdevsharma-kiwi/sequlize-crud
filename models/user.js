const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection')

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
    
  
});


console.log(User === sequelize.models.User); 

module.exports = User