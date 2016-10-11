'use strict';

var getMessage = function(a, b) {
  var message = 'Переданы некорректные данные';
  switch(typeof a) {
    case 'boolean':
      if(a) {
        message = 'переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
      } else {
        message = 'Переданное GIF-изображение не анимировано';
      }
      break;
    case 'number':
      message = 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
      break;
    case 'object':
      if(typeof b === 'object') {
        var artifactsSquare = 0;
        for(var i = 0; i < a.length; i++) {
          artifactsSquare += a[i] * b[i];
        }
        message = 'Общая площадь артефактов сжатия ' + artifactsSquare + ' пикселей';

      } else {
        var amountOfRedPoints = 0;
        for(var j = 0; j < a.length; j++) {
          amountOfRedPoints += a[j];
        }

        message = 'Количество красных точек во всех строчках изображения ' + amountOfRedPoints;
      }
      break;
  }

  return message;
};
