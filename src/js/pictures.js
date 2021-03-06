'use strict';

var load = require('./load');
var getPhoto = require('./picture');

(function() {

  var filters = document.querySelector('.filters');
  var container = document.querySelector('.pictures');
  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';
  var IMAGE_LOAD_TIMEOUT = 10000;
  var template = document.getElementById('picture-template');
  var templateContainer = template.content ? template.content : template;

  var renderPhotos = function(data) {
    data.forEach(function(picture) {
      container.appendChild(getPhoto(picture, templateContainer, IMAGE_LOAD_TIMEOUT));
    });
  };

  filters.classList.add('hidden');

  load(PICTURES_LOAD_URL, renderPhotos);

  filters.classList.remove('hidden');
})();
