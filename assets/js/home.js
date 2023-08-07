let drawer = document.querySelector(".drawer");
let sideBarBtn = document.querySelector(".header-btn");
let drawerCancelBtn = document.querySelector(".drawer-cancel-btn");
drawer.classList.add("drawer-right");
let body = document.querySelector("body");
sideBarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  drawer.classList.add("drawer-left");
  drawer.classList.remove("drawer-right");
  body.classList.add("black-bc");
  document.addEventListener("mouseover", (ev) => {
    ev.preventDefault();
    body.classList.add("cursor-bc");
  });
});

drawerCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  drawer.classList.remove("drawer-left");
  drawer.classList.add("drawer-right");
  body.classList.remove("black-bc");
});
drawer.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("click", (e) => {
  drawer.classList.add("drawer-right");
  body.classList.remove("black-bc");
});

//----------------------drawer-------------------------
//-----------------------new---------------------------
//----------------------header-------------------------
let header = document.querySelector(".header-lowerpart");
let headerScrolled = window.scrollY;
let navBtn = document.querySelector(".nav-btn");
let headerBtn = document.querySelector(".header-btn");
let newHeaderBtn = ' <img src="../images/home-images/header-btn.png" alt="" />';
headerBtn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  headerBtn.innerHTML =
    ' <img src="../images/home-images/header-btn-light.png" alt="" />';
});
headerBtn.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  headerBtn.innerHTML =
    ' <img src="../images/home-images/header-btn.png" alt="" />';
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  console.log(headerScrolled);
  if (window.scrollY >= 162) {
    header.classList.add("header-bc");
    headerBtn.classList.add("header-btn-scroll");
    navBtn.classList.remove("nav-btn");
    navBtn.classList.add("nav-btn-scroll");
  } else {
    header.classList.remove("header-bc");

    headerBtn.classList.remove("header-btn-scroll");
    navBtn.classList.remove("nav-btn-scroll");

    navBtn.classList.add("nav-btn");
  }
});
//----------------------------header-----------------------------
//----------------------------new--------------------------------
//----------------------business-program-------------------------
let circleA1 = document.querySelector(".b-p-a");
let circleA2 = document.querySelector(".b-p-b");
let circleA3 = document.querySelector(".b-p-c");
let circleAa1 = document.querySelector(".circle-animation-area1");
let circleAa2 = document.querySelector(".circle-animation-area2");
let circleAa3 = document.querySelector(".circle-animation-area3");
circleAa1.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  circleA1.classList.add("circle-animation-on");
  circleA1.classList.remove("circle-animation-out");
});
circleAa1.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  circleA1.classList.remove("circle-animation-on");
  circleA1.classList.add("circle-animation-out");
});
circleAa2.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  circleA2.classList.add("circle-animation-on");
  circleA2.classList.remove("circle-animation-out");
});
circleAa2.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  circleA2.classList.remove("circle-animation-on");
  circleA2.classList.add("circle-animation-out");
});
circleAa3.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  circleA3.classList.add("circle-animation-on");
  circleA3.classList.remove("circle-animation-out");
});
circleAa3.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  circleA3.classList.remove("circle-animation-on");
  circleA3.classList.add("circle-animation-out");
});
//-----------------------business-proogress--------------------
//---------------------------new-------------------------------
//--------------------------swiper-----------------------------
let slideToShow = 3;
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    prevArrow:
      '<span class="priv-arrow"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1000, // Breakpoint at which the configuration changes
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//--------------------------swiper-----------------------------
//---------------------------new-------------------------------
//-----------------------------video---------------------------

let videoCaller = document.querySelector(".video-caller");
let youtubeVideo = document.querySelector(".youtube-video");
let newYoutubeDiv = document.querySelector(".new-youtube-div");
videoCaller.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  youtubeVideo.classList.add("video-black-bc");
  newYoutubeDiv.classList.add("video-black-bg");
});
document.addEventListener("click", (e) => {
  e.preventDefault();

  youtubeVideo.classList.remove("video-black-bc");
  newYoutubeDiv.classList.remove("video-black-bg");
});
//--------------------------video-----------------------------
//---------------------------new-------------------------------
//-----------------------------b-p2---------------------------

$(document).ready(function () {
  $(".b-p2").slick({
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    prevArrow: "",
    nextArrow: "",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
//--------------------------b-p2-----------------------------
//---------------------------new-----------------------------
//--------------------------Back to top----------------------
let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".back-to-top");
  let scrollProgressBtn = document.querySelector(".back-to-top-button");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
   if(pos>100){
    scrollProgress.style.display="grid";
   }
   else{
    scrollProgress.style.display="none";
   }
  scrollProgress.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#b00f0f ${scrollValue}%,#FFFFFF ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
