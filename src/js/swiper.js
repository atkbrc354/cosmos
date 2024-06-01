var swiper = new Swiper(".mySwiper", {

    pagination: {

        el: ".swiper-paginationn",
        clickable: true,
        bulletClass: "bullet-class",

    }

});


var swiperTwo = new Swiper(".constantin", {

    pagination: {

        el: ".swiper-paginationn-constantin",
        clickable: true,
        bulletClass: "bullet-class",

    }

});
var swiperThree = new Swiper(".nikolay", {

    pagination: {

        el: ".swiper-paginationn-nikolay",
        clickable: true,
        bulletClass: "bullet-class",

    }

});


var swiperFour = new Swiper(".fridirxx", {

    pagination: {

        el: ".swiper-paginationn-fridrix",
        clickable: true,
        bulletClass: "bullet-class",

    }

});








let pagesScientists = document.querySelectorAll('.sergey_page,.constantin_page,.nikolay_page,.fridrix_page')
let pagesBtns = document.querySelectorAll("[data-scientists]")
let mainPge = document.querySelector('.scientists_block')
let baskBtn = document.querySelectorAll(".bask-btn")
pagesBtns.forEach(btn => {
    btn.onclick = () => {
        let id = btn.getAttribute('data-scientists')

        pagesScientists.forEach(page => {
            if (id === page.id) {
                mainPge.style.display = 'none'
                page.classList.add('show-uchrniy-page')
            } else {
                page.classList.remove('show-uchrniy-page')
            }
        });
    }
})

baskBtn.forEach(btn => {
    btn.onclick = () => {
        pagesScientists.forEach(list => {
            list.classList.remove('show-uchrniy-page')
        });
        mainPge.style.display = "flex"

    }
});





document.querySelector('.rocket_photo').addEventListener('click', function () {
    const rocketPhoto = document.querySelector('.rocket_photo');
    const textBlock = document.querySelector('.text');
    const rocket = document.querySelector('.rocket');

    if (textBlock.classList.contains('visible')) {
        rocketPhoto.style.width = '400px';
        rocket.style.transform = 'translateX(0)';
        textBlock.classList.remove('visible');
    } else {
        rocketPhoto.style.width = '600px';
        rocket.style.transform = 'translateX(800)';
        textBlock.classList.add('visible');
    }
});





let sputnik = document.querySelector('.sputnik-position')

sputnik.onclick = () => {
    sputnik.classList.toggle('animatetSputnik')
}


let pages = document.querySelectorAll('.first-SPA-box, .second-SPA-box,.third-SPA-box, .fouth-SPA-box, .fifth-SPA-box, .sixth-SPA-box')
let pagesBtn = document.querySelectorAll("[data-page]")
let lists = document.querySelectorAll('.fiveth-SPA-notebook-box, .fouth-SPA-notebook-box, .third-SPA-notebook-box, .second-SPA-notebook-box, .first-SPA-notebook-box')
let listBtn = document.querySelectorAll('[data-big]')
pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let id = btn.getAttribute('data-page')

        pages.forEach(page => {
            if (id === page.id) {
                page.classList.add('show-page');
            } else {
                page.classList.remove('show-page');
            }
        });
    }
})







listBtn.forEach(btn => {
    btn.onclick = () => {

        let id = btn.getAttribute('data-big')
        lists.forEach(page => {


            if (id === page.id) {
                page.classList.add('show-list')
                pages.forEach(pag => {
                    pag.classList.add('show-page-close');
                })
            } else {
                page.classList.remove('show-list')

            }
        })
    }
})

let fouthSection = document.querySelector('.fouth-section');

lists.forEach(list => {
    list.ondblclick = () => {
        pages.forEach(pag => {
            pag.classList.remove('show-page-close');
        })
        list.classList.remove('show-list');
    }
});





let firstLiv = document.querySelector('.first-liv')
let secondLiv = document.querySelector('.second-liv')
let thirdLiv = document.querySelector('.third-liv')
let fourLiv = document.querySelector('.four-liv')
let fiveLiv = document.querySelector('.fifth-liv')

// Создаем анимацию левитации с помощью setInterval
setInterval(function () {
    // Изменяем позицию предметов случайным образом
    firstLiv.style.marginTop = getRandomPosition() + 'px';

   /*  secondLiv.style.marginTop = getRandomPosition() + 'px'
    secondLiv.style.marginRight = getRandomPosition() + 'px'
    */ thirdLiv.style.marginTop = getRandomPosition() + 'px'
    thirdLiv.style.marginRight = getRandomPosition() + 'px'
   /*  fourLiv.style.marginLeft = getRandomPosition() + 'px'
    fourLiv.style.marginTop = getRandomPosition() + 'px'
    fiveLiv.style.marginRight = getRandomPosition() + 'px'
    fiveLiv.style.marginTop = getRandomPosition() + 'px'
 */
}, 1000);

setInterval(function () {
    // Изменяем позицию предметов случайным образом
  
    secondLiv.style.marginTop = getRandomPosition2() + 'px'
    secondLiv.style.marginRight = getRandomPosition2() + 'px'
   
    fourLiv.style.marginLeft = getRandomPosition2() + 'px'
    fourLiv.style.marginTop = getRandomPosition2() + 'px'
    fiveLiv.style.marginRight = getRandomPosition2() + 'px'
    fiveLiv.style.marginTop = getRandomPosition2() + 'px'

},800);// Изменяйте интервал, чтобы регулировать скорость левитации

// Функция для получения случайной позиции в пределах контейнера
function getRandomPosition2() {
    return Math.floor(Math.random() * 100); // Измените значение, чтобы ограничить область перемещения
}



