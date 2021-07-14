const hamburger = document.querySelector('.home');
const toggle = document.querySelector('.toggle');

console.log(toggle)

toggle.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    toggle.classList.toggle('active')
})