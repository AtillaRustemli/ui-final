let drawer = document.querySelector(".drawer");
let sideBarBtn = document.querySelector(".header-btn");
let drawerCancelBtn = document.querySelector(".drawer-cancel-btn");
drawer.classList.add("drawer-right");
drawer.addEventListener("click",(e)=>{
    e.stopPropagation();
});
const body = document.querySelector("body");
sideBarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  drawer.classList.add("drawer-left");
  drawer.classList.remove("drawer-right");
  body.classList.add("black-bc");
});

drawerCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  drawer.classList.remove("drawer-left");
  drawer.classList.add("drawer-right");
  body.classList.remove("black-bc");
});

document.addEventListener("click", (e) => {
    e.stopPropagation();
  drawer.classList.add("drawer-right");
  body.classList.remove("black-bc");
});

//----------------------drawer-------------------------
//-----------------------new--------------------------
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
//--------------------------Back to top----------------------
let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".back-to-top");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#DF0A0A ${scrollValue}%,#FFFFFF ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
//----------------------------Back to top-----------------------------
//---------------------------------new--------------------------------
//-----------------------------search area----------------------------

const searchArea = document.querySelector(".search-area");
const searchBtn = document.querySelector(".search-btn");
const searchAreaBtn = document.querySelector(".search-area-btn");
const searchCancelBtn = document.querySelector(".search-cancel-btn");
const searchInput = document.querySelector(".search-area-input"); // Get the search input element


searchArea.classList.add("search-area-position-up");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.add("search-time-black-bg");
  searchArea.classList.add("search-area-position-down");
});

searchCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.remove("search-time-black-bg");
  searchArea.classList.remove("search-area-position-down");
});
searchAreaBtn.addEventListener("click", (e) => { 
   
      e.preventDefault(); 
      searchArea.classList.add("search-area-position-down");
    
  });

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    searchArea.classList.add("search-area-position-down"); 
  } 
});
//----------------------------search area-----------------------------
//---------------------------------new--------------------------------
//---------------------------------last-------------------------------
let searcBtnInBlog=document.querySelector(".search-btn-blog")
searcBtnInBlog.addEventListener("click", (e) => {
    e.preventDefault();
    return;
  });