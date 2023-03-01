var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
var mobileMenuContainer = document.querySelector(".mobile-menu-container");
var closeMobileMenuBtn = document.querySelector(".close-mobile-menu-btn");
var currentYear = document.querySelector(".current-year");
var header = document.querySelector("#header")

var date = new Date();
currentYear.innerHTML = date.getFullYear();
mobileMenuBtn.addEventListener("click", function (e){
    e.stopPropagation();
    mobileMenuContainer.classList.add("show-mobile-menu");
    header.style.marginRight = "300px"
});

closeMobileMenuBtn.addEventListener("click", function (){
    mobileMenuContainer.classList.remove("show-mobile-menu");
    header.style.marginRight = "0px"
});

document.body.addEventListener("click", function (){
    mobileMenuContainer.classList.remove("show-mobile-menu");
    header.style.marginRight = "0px"
});