"use strict";

// This Array with images for portfolio
var imgArray = ['./src/img/portfolio-1.png', './src/img/portfolio-2.png', './src/img/portfolio-3.png', './src/img/portfolio-4.png', './src/img/portfolio-5.png', './src/img/portfolio-6.png', './src/img/portfolio-7.png', './src/img/portfolio-8.png', './src/img/portfolio-9.png', './src/img/portfolio-10.png', './src/img/portfolio-11.png', './src/img/portfolio-12.png']; // This header nav menu

var menu = document.querySelector('.menu'); // This nav menu elements li

var menuItems = menu.querySelectorAll('li'); // This tags menu

var tags = document.querySelector('.tags'); // This tags menu elements li

var tagsItems = tags.querySelectorAll('li'); // This portfolio container for images

var portfolio = document.querySelector('.portfolio-images'); // This images tags in portfolio container

var imgPort = portfolio.querySelectorAll('img'); // Shuffle function

var shuffleImages = function shuffleImages(images) {
  images.sort(function () {
    return Math.random() - 0.5;
  });
  return images;
}; // Active links for nav menu


menu.addEventListener('click', function (e) {
  menuItems.forEach(function (el) {
    el.querySelector('a').classList.remove('active_link');
  });
  e.target.classList.add('active_link');
}); // Active tags for tags menu and shuffle Images in Portfolio

tags.addEventListener('click', function (e) {
  if (!e.target.classList.contains('active_tag')) {
    tagsItems.forEach(function (el) {
      el.classList.remove('active_tag');
    });
    e.target.classList.add('active_tag');
    allImgPortfolio(shuffleImages(imgArray), imgPort);
  }
}); // This function for displaying images into portfolio

var allImgPortfolio = function allImgPortfolio(array, imgPort) {
  for (var i = 0; i < array.length; i++) {
    imgPort[i].setAttribute('src', array[i]);
  }
};

allImgPortfolio(imgArray, imgPort); // This changed active link when you scrolling

document.addEventListener('scroll', function () {
  menuItems.forEach(function (el) {
    el.querySelector('a').classList.remove('active_link');

    if (pageYOffset <= 600 && el.querySelector('a').innerText === 'HOME') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 605 && pageYOffset < 1165 && el.querySelector('a').innerText === 'SERVICES') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 1165 && pageYOffset < 1465 && el.querySelector('a').innerText === 'PORTFOLIO') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }
  });
});