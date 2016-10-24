'use strict';

module.exports = {
  //Считает, сколько прошло дней с последнего дня рождения Грейс Хоппер.
  getDaysSinceLastGracesBirthday: function() {
    var GRACES_BIRTHDAY = new Date(1906, 11, 9);
    var today = new Date();
    var day = GRACES_BIRTHDAY.getDate();
    var month = GRACES_BIRTHDAY.getMonth();
    var year;
    if (today.getMonth() === month && today.getDate() > day ) {
      year = today.getFullYear();
    } else {
      year = today.getFullYear() - 1;
    }
    var lastGracesBirthday = new Date(year, month, day);
    return Math.floor((today - lastGracesBirthday) / 86400000);
  },
};









