// This Array with images for portfolio
let imgArray = [
    './src/img/portfolio-1.png',
    './src/img/portfolio-2.png',
    './src/img/portfolio-3.png',
    './src/img/portfolio-4.png',
    './src/img/portfolio-5.png',
    './src/img/portfolio-6.png',
    './src/img/portfolio-7.png',
    './src/img/portfolio-8.png',
    './src/img/portfolio-9.png',
    './src/img/portfolio-10.png',
    './src/img/portfolio-11.png',
    './src/img/portfolio-12.png'
]

// This header nav menu
const menu = document.querySelector('.menu');
// This nav menu elements li
const menuItems = menu.querySelectorAll('li');

// This tags menu
const tags = document.querySelector('.tags');
// This tags menu elements li
const tagsItems = tags.querySelectorAll('li');

// This portfolio container for images
const portfolio = document.querySelector('.portfolio-images');
// This images tags in portfolio container
const imgPort = portfolio.querySelectorAll('img')

// Shuffle function
const shuffleImages = (images) => {
    images.sort(() => Math.random() - 0.5);
    return images;
}

// Active links for nav menu
menu.addEventListener('click', e => {
    menuItems.forEach(el => {
        el.querySelector('a').classList.remove('active_link');
    })
    e.target.classList.add('active_link')
})

// Active tags for tags menu and shuffle Images in Portfolio
tags.addEventListener('click', e => {
    if(!e.target.classList.contains('active_tag')) {
        tagsItems.forEach(el => {
            el.classList.remove('active_tag');
    })
        e.target.classList.add('active_tag');
        allImgPortfolio(shuffleImages(imgArray), imgPort);
    }   
})

// This function for displaying images into portfolio
const allImgPortfolio = (array,imgPort) => {
    
    for(let i = 0; i < array.length; i++) { 
         imgPort[i].setAttribute('src', array[i]);
    }
}
allImgPortfolio(imgArray,imgPort);


// This changed active link when you scrolling
document.addEventListener('scroll', ()=> {

        menuItems.forEach(el => {
            el.querySelector('a').classList.remove('active_link');

            if (pageYOffset <= 600 && (el.querySelector('a').innerText ==='HOME')) {
                el.querySelector('a').setAttribute('class', 'active_link');
            }

            if ((pageYOffset > 605 && pageYOffset < 1165) && (el.querySelector('a').innerText ==='SERVICES')) {
                el.querySelector('a').setAttribute('class', 'active_link');
            }

            if (pageYOffset > 1165 && (el.querySelector('a').innerText ==='PORTFOLIO')) {
                el.querySelector('a').setAttribute('class', 'active_link');
            }
        })
})















