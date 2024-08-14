const header =document. querySelector ("header");

const hamburgerBtn = document.querySelector ("hamburger-btn"); 

const closeMenußtn = document.querySelector ("close-menu-btn");

hamburgerBtn.addEventListener ("click", () => header.classList.toggle("show-mobile-menu"));
closeMenußtn.addEventListener("click", () => hamburgerBtn.click());