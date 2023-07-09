
      // new featured products slide 
      var swiper = new Swiper(".mySlide", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
     1000: {
      slidesPerView: 4,
    },
  },
      });

let topHeader = document.querySelector(".top");
let goTop = document.querySelector(".goTop");
let menuBox = document.querySelector(".menuBox");
let closeBox = document.querySelector(".closeBox");
let navbar = document.querySelector(".navbar");

// menu onclick show navigation 
menuBox.onclick = () =>{
navbar.classList.add("active");
}

// close menu onclick 
closeBox.onclick = () =>{
  navbar.classList.remove("active");
  }

// hide top header on scroll 
window.onscroll = () =>{
  if (window.scrollY > 150){
    topHeader.classList.add("hide");
    goTop.classList.add("active");
  }else{
    topHeader.classList.remove("hide");
    goTop.classList.remove("active");
  }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .bottom .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .bottom .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
})