// JavaScript Document
console.log("hi");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const buttons = document.querySelectorAll('.js-toggle');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active')); // alles uit [web:5]
    btn.classList.add('active'); // geklikte aan [web:5]
  });
});