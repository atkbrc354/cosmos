document.addEventListener('DOMContentLoaded', function() {
    const flight1 = document.getElementById('flight1');
    const flight2 = document.getElementById('flight2');
    const flightDesc = document.querySelector('.flighti__desc'); 
    
    const title = document.querySelector('.flighti__title');
    
    title.addEventListener('click', function() {
        if (flight2.style.transform === 'translateX(100%)') {
            flight1.style.transition = 'transform 1s'; 
            flight2.style.transition = 'transform 1s'; 
            flight1.style.transform = 'translateX(0)';
            flight2.style.transform = 'translateX(0)';
            flightDesc.style.animation = 'slideTextFromLeft 1.5s forwards'; 
        } else {
            flight1.style.transition = 'transform 1s'; 
            flight2.style.transition = 'transform 1s'; 
            flight1.style.transform = 'translateX(-100%)';
            flight2.style.transform = 'translateX(-100%)';
            flightDesc.style.animation = 'slideTextFromRight 1.5s forwards'; 
        }
    });
  });