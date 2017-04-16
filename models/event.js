'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    title: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUnique: (value, next) => {
          Event.find({where : {title: value}})
          .done((exists) => {
            ((exists)) ? next('Event title is already exists') : next()
          })
        }
      }
    },
    eventName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: true
      }
    },
    createdAt: {
      type:DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};
