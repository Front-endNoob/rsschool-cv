// This function for displaying images

const allElements = () => {
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

    const portfolio = document.querySelector('.portfolio-images');

    imgArray.forEach((el) => {
        const divItems = document.createElement('div');
        const image = document.createElement('img');
        divItems.setAttribute('class', 'portfolio-images__item');
        image.setAttribute('src', el);
        divItems.appendChild(image);
        portfolio.appendChild(divItems);

    })
}

allElements();


// Active links for menu

const menu = document.querySelector('.menu');
menu.addEventListener('click', e => {
    const menuItems = menu.querySelectorAll('li');
    menuItems.forEach(el => {
        el.querySelector('a').classList.remove('active_link');
        e.target.classList.add('active_link')
    })
})


