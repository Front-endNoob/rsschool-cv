"use strict";

// This function for displaying images
var allElements = function allElements() {
  var imgArray = ['./src/img/portfolio-1.png', './src/img/portfolio-2.png', './src/img/portfolio-3.png', './src/img/portfolio-4.png', './src/img/portfolio-5.png', './src/img/portfolio-6.png', './src/img/portfolio-7.png', './src/img/portfolio-8.png', './src/img/portfolio-9.png', './src/img/portfolio-10.png', './src/img/portfolio-11.png', './src/img/portfolio-12.png'];
  var portfolio = document.querySelector('.portfolio-images');
  imgArray.forEach(function (el) {
    var divItems = document.createElement('div');
    var image = document.createElement('img');
    divItems.setAttribute('class', 'portfolio-images__item');
    image.setAttribute('src', el);
    divItems.appendChild(image);
    portfolio.appendChild(divItems);
  });
};

allElements();