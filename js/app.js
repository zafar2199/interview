document.querySelector('.menu-icon').addEventListener('click', animateNavbar);

function animateNavbar(e){

tl.reversed() ? tl.play() : tl.reverse();
}