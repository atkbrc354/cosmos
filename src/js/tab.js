document.addEventListener("DOMContentLoaded", function () {
  const tabThird = document.querySelectorAll(".tab__third");
  const mainThird = document.querySelectorAll(".cards__third");
  const blockThird = document.querySelector(".third__container");
  const thirdSvg = document.querySelectorAll(".third--svg");
  const thirdContent = document.querySelectorAll(".third__content");


  tabThird.forEach((item, i) => {
    item.addEventListener("click", () => {
      hideThird();
      showThird(i);
      blockThird.style.display = "none";
    });
  });
  
  function hideThird() {
    mainThird.forEach((container) => {
      container.classList.remove("show-third");
      container.classList.add("hide-third");
    });
  }
  
  function showThird(index) {
    if (mainThird[index].classList.contains("hide-third")) {
      mainThird[index].classList.remove("hide-third");
      mainThird[index].classList.add("show-third", "fade-third");
    }
  }
  
  thirdSvg.forEach((item, index) => {
    item.addEventListener("click", () => {
      showBlockThird();
      blockThird.style.display = "block"; 
    });
  });
  
  thirdContent.forEach((item) => {
    item.addEventListener("click", () => {
      showBlockThird();
      blockThird.style.display = "block"; 
    });
  });
  
  function showBlockThird() {
    blockThird.classList.remove("hide-third");
    blockThird.classList.add("show-third", "fade-third");
    mainThird.forEach((container) => {
      container.classList.add("hide-third");
    });
  }
  
  hideThird();
  showThird(0);

  const tabBoycanour = document.querySelectorAll('.boycanour-circle');
  const cardsContainer = document.querySelectorAll(".boycanour");

  tabBoycanour.forEach((item, i) => {
      item.addEventListener("click", () => {
        hideContent();
        showContent(i + 1);
        tabBoycanour.forEach((otherBtn) => {
          otherBtn.classList.remove("active-circle");
        });
        item.classList.add("active-circle");
      });
    });


    function hideContent() {
      cardsContainer.forEach((container) => {
        container.classList.remove("show");
        container.classList.add("hide");
      });
    }

    function showContent(index) {
      if (cardsContainer[index].classList.contains("hide")) {
        cardsContainer[index].classList.remove("hide");
        cardsContainer[index].classList.add("show");
      }
    }

    hideContent();
    showContent(0);

  })

