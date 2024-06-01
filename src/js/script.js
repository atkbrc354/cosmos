document.addEventListener('DOMContentLoaded', function () {
    const kosmKorables = document.querySelector('.kosm_korables_7');
    const triggers = document.querySelectorAll('#vostok_trigger, #voshod_trigger, #souz_trigger, #buran_trigger');
    const descriptions = document.querySelectorAll('.main_section_korabl_1');
    const initialBlock = document.getElementById('first_korabl_full_cosm');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            // Скрыть начальный блок с изображениями
            initialBlock.classList.add('hidden');
            // Скрыть все блоки с описаниями
            descriptions.forEach(desc => desc.classList.add('hidden'));
            // Показать соответствующий блок с описанием
            const targetId = trigger.id.replace('_trigger', '');
            const description = document.getElementById(targetId);
            if (description) {
                description.classList.remove('hidden');
            }
        });
    });

});

function hideAllSections() {
    document.querySelectorAll('.main_section_korabl_1, .main_section_korabl_2').forEach(section => {
        section.classList.add('hidden');
    });
};


document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 'first_korabl_full_cosm'; // Изначально текущим блоком является первый блок
    let previousSection = null; // Переменная для хранения предыдущего блока

    const navItems = document.querySelectorAll('.text_nav_korabl.vostok');
    const triggers = document.querySelectorAll('.vostok_img');
    const backButtons = document.querySelectorAll('.for_left_array_korabl.vostok');
    const lineTopElement1 = document.querySelector('.for_line_top_korabl');
    const lineTopElement2 = document.querySelector('.for_line_top_korabl_1')


    function showSection(id) {
        if (id === 'vostok_obozhachenia') {
            previousSection = 'vostok'; // Устанавливаем значение previousSection на главный блок
        } else {
            if (id === 'vostok') {
                previousSection = 'first_korabl_full_cosm'; // Устанавливаем значение previousSection на главный блок
            } else {
                previousSection = currentSection; // Сохраняем предыдущий блок, кроме vostok_obozhachenia
            };
        };

        document.getElementById(id).classList.remove('hidden');
        currentSection = id; // Обновляем текущий блок
        console.log(id)
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            hideAllSections();
            showSection('vostok');
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hideAllSections();
            showSection(item.getAttribute('data-target'));
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllSections();
            showSection(previousSection); // Возвращаемся к предыдущему блоку
        });
    });

    lineTopElement1.addEventListener('click', () => {
        hideAllSections();
        showSection('vostok_obozhachenia_2');
    });

    lineTopElement2.addEventListener('click', () => {
        hideAllSections();
        showSection('vostok_obozhachenia');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 'first_korabl_full_cosm';
    let previousSection = null;

    const navItems = document.querySelectorAll('.text_nav_korabl.voshod');
    const triggers = document.querySelectorAll('.voshod_img');
    const backButtons = document.querySelectorAll('.for_left_array_korabl.voshod');
    const nextButton = document.querySelector('.arrow_right_kor');
    const prevButton = document.querySelector('.arrow_left_kor');

    function showSection(id) {
        document.getElementById(id).classList.remove('hidden');

        if (id === 'voshod_obozhachenia') {
            previousSection = 'voshod';
        } else {
            if (id === 'voshod') {
                previousSection = 'first_korabl_full_cosm';
            } else {
                if (id === 'voshod_opisanie') {
                    previousSection = 'voshod';

                } else {

                    previousSection = currentSection
                };
            }
        }
        currentSection = id;
    }

    function hideAllSections() {
        // Скрываем все секции, чтобы показать только одну
        const sections = document.querySelectorAll('.main_section_korabl_1');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            hideAllSections();
            showSection('voshod');
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hideAllSections();
            showSection(item.getAttribute('data-target'));
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllSections();
            showSection(previousSection);
        });
    });

    nextButton.addEventListener('click', () => {
        hideAllSections();
        showSection('voshod_opisanie_2');
    });

    prevButton.addEventListener('click', () => {
        hideAllSections();
        showSection('voshod_opisanie');
    });

    const nextButton2 = document.querySelector('.arrow_right_kor.opisanie_2');
    nextButton2.addEventListener('click', () => {
        hideAllSections();
        showSection('voshod_opisanie_3');
    });

    const prevButton2 = document.querySelector('.arrow_left_kor.opisanie_3');
    prevButton2.addEventListener('click', () => {
        hideAllSections();
        showSection('voshod_opisanie_2');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 'first_korabl_full_cosm'; // Изначально текущим блоком является первый блок
    let previousSection = null; // Переменная для хранения предыдущего блока

    const navItems = document.querySelectorAll('.text_nav_korabl.souz');
    const triggers = document.querySelectorAll('.souz_img');
    const backButtons = document.querySelectorAll('.for_left_array_korabl.souz');



    function showSection(id) {

        if (id === 'souz') {
            previousSection = 'first_korabl_full_cosm'; // Устанавливаем значение previousSection на главный блок
        } else {
            previousSection = currentSection; // Сохраняем предыдущий блок, кроме vostok_obozhachenia
        };

        document.getElementById(id).classList.remove('hidden');
        currentSection = id; // Обновляем текущий блок
        console.log(id)
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            hideAllSections();
            showSection('souz');
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hideAllSections();
            showSection(item.getAttribute('data-target'));
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllSections();
            showSection(previousSection); // Возвращаемся к предыдущему блоку
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    let currentSection = 'first_korabl_full_cosm'; // Изначально текущим блоком является первый блок
    let previousSection = null; // Переменная для хранения предыдущего блока

    const navItems = document.querySelectorAll('.text_nav_korabl.buran');
    const triggers = document.querySelectorAll('.buran_img');
    const backButtons = document.querySelectorAll('.for_left_array_korabl.buran');



    function showSection(id) {

        if (id === 'buran') {
            previousSection = 'first_korabl_full_cosm'; // Устанавливаем значение previousSection на главный блок
        } else {
            previousSection = currentSection; // Сохраняем предыдущий блок, кроме vostok_obozhachenia
        };

        document.getElementById(id).classList.remove('hidden');
        currentSection = id; // Обновляем текущий блок
        console.log(id)
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            hideAllSections();
            showSection('buran');
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hideAllSections();
            showSection(item.getAttribute('data-target'));
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllSections();
            showSection(previousSection); // Возвращаемся к предыдущему блоку
        });
    });

});


document.addEventListener('DOMContentLoaded', () => {

    const triggers = document.getElementById('second_korabl_full_cosm');
    triggers.addEventListener('click', () => {
        hideAllSections();
        showSection('second_korabl_full_cosm_1');
    });


    function showSection(id) {
        document.getElementById(id).classList.remove('hidden');
        currentSection = id; // Обновляем текущий блок
    }
    function hideAllSections() {
        const sections = document.getElementById('second_korabl_full_cosm');
        sections.classList.add('hidden');
    }

});

document.addEventListener("DOMContentLoaded", function() {
    const downArrow = document.querySelector('.down-arrow');
    const astronautSection = document.querySelector('.section-astronaut');
    const descrStartSection = document.querySelector('.section-descr_start');
    const containerSlider = document.querySelector('.container-slider');
    const imageLine = document.querySelector('.image-line');
    const imageAstronaut = document.querySelector('.images-astronaut');
    const astronautDesc = document.querySelector('.astronaut__desc');


    imageLine.addEventListener('click', function() {
        astronautSection.classList.add('hidden');
        containerSlider.classList.remove('hidden');
    });

    imageAstronaut.addEventListener('click', function() {
        astronautSection.classList.add('hidden');
        containerSlider.classList.remove('hidden');
    });

    astronautDesc.addEventListener('click', function() {
        astronautSection.classList.add('hidden');
        containerSlider.classList.remove('hidden');
    });
    let currentSlide = 0;
    const slides = document.querySelectorAll('.section-gagarin');
    const totalSlides = slides.length;
    const sliderLeft = document.querySelector('.slider-left');
    const sliderRight = document.querySelector('.slider-rigth');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        if (index === 0) {
            sliderLeft.style.display = 'none';
            sliderRight.style.display = 'block';
        } else if (index === totalSlides - 1) {
            sliderLeft.style.display = 'block';
            sliderRight.style.display = 'none';
        } else {
            sliderLeft.style.display = 'block';
            sliderRight.style.display = 'block';
        }
    }

    sliderLeft.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        showSlide(currentSlide);
    });

    sliderRight.addEventListener('click', () => {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    document.querySelectorAll('.section-gagarin').forEach(article => {
        let currentTextSlide = 0;
        const textSlides = article.querySelectorAll('.gagarin-descr_slide');
        const totalTextSlides = textSlides.length;
        const textSliderLeft = article.querySelector('.descr_slide-left');
        const textSliderRight = article.querySelector('.descr_slide-right');

        function showTextSlide(index) {
            textSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            if (index === 0) {
                textSliderLeft.style.display = 'none';
                textSliderRight.style.display = 'block';
            } else if (index === totalTextSlides - 1) {
                textSliderLeft.style.display = 'block';
                textSliderRight.style.display = 'none';
            } else {
                textSliderLeft.style.display = 'block';
                textSliderRight.style.display = 'block';
            }
        }

        textSliderLeft.addEventListener('click', () => {
            currentTextSlide = (currentTextSlide > 0) ? currentTextSlide - 1 : totalTextSlides - 1;
            showTextSlide(currentTextSlide);
        });

        textSliderRight.addEventListener('click', () => {
            currentTextSlide = (currentTextSlide < totalTextSlides - 1) ? currentTextSlide + 1 : 0;
            showTextSlide(currentTextSlide);
        });


        showTextSlide(currentTextSlide);
    });
    
});




// document.querySelectorAll('.list__link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const sections = document.querySelectorAll('.section');

//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//         const offsetTop = targetElement.offsetTop;
//         sections[currentIndex].style.opacity = '1';

//         window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth'
//         });

//         // Add delay between clicks
//         document.querySelectorAll('.list__link').forEach(link => {
//             link.style.pointerEvents = 'none'; // Disable clicks
//         });

//         setTimeout(() => {
//             document.querySelectorAll('.list__link').forEach(link => {
//                 link.style.pointerEvents = 'auto'; // Enable clicks after delay
//             });
//         }, 1000); // 1000 milliseconds delay
//     });
// });


// const sections = document.querySelectorAll('.section');
// let currentIndex = 0;

// // Показываем первую секцию сразу
// sections[0].style.opacity = '1';

// // Функция для обработки скролла
// function handleScroll(event) {
//   const delta = Math.sign(event.deltaY);
//   if (delta > 0 && currentIndex < sections.length - 1) {
//     currentIndex++;
//     sections[currentIndex].style.opacity = '1';
//     sections[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
//   } else if (delta < 0 && currentIndex > 0) {
//     currentIndex--;
//     sections[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// }

// // Добавляем обработчик события скролла
// window.addEventListener('wheel', handleScroll);






// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.querySelector('.icons-space_1');
//     const closeIcon = document.querySelector('.sectiom-menu .icons-space');
//     const menu = document.getElementById('menu');

//     menuIcon.addEventListener('click', function () {
//         menu.style.display = 'flex';
//         document.body.style.overflow = 'hidden'; // Disable scroll on the body
//         menuIcon.style.display = 'none';

//     });

//     closeIcon.addEventListener('click', function () {
//         menu.style.display = 'none';
//         document.body.style.overflow = 'auto'; // Enable scroll on the body
//         menuIcon.style.display = 'block';

//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.icons-space_1');
    const closeIcon = document.querySelector('.sectiom-menu .icons-space');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.style.opacity = '1';
        }, 10); // small delay to ensure the transition occurs
        document.body.style.overflow = 'hidden'; // Disable scroll on the body
        menuIcon.style.display = 'none';
    });

    closeIcon.addEventListener('click', function () {
        // menu.style.display = 'none';
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500); // match this duration to the CSS transition duration
        menuIcon.style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scroll on the body
    });

    document.querySelectorAll('.list__link').forEach(link => {
        link.addEventListener('click', function(event) {
            menuIcon.style.display = 'block';

            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            menu.style.opacity = '0';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 100); // match this duration to the CSS transition duration
            document.body.style.overflow = 'auto'; // Enable scroll on the bo

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Add delay between clicks
            document.querySelectorAll('.list__link').forEach(link => {
                link.style.pointerEvents = 'none'; // Disable clicks    
            });

            setTimeout(() => {
                document.querySelectorAll('.list__link').forEach(link => {
                    link.style.pointerEvents = 'auto'; // Enable clicks after delay
                });
            }, 1000); // 1000 milliseconds delay
        });
    });
});