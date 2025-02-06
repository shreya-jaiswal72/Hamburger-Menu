const hamburgerMenuContainer=document.querySelector(".hamburger-menu-container")
const headerSection=document.querySelector(".header")
const closeMenu=document.querySelector(".close-icon");

hamburgerMenuContainer.addEventListener('click',()=>{
   headerSection.classList.add('open-icon');
})

closeMenu.addEventListener('click',()=>{
    headerSection.classList.remove('open-icon');
 })