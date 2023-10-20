const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navImg = document.querySelector('#nav-btn-img');
navBtn.onclick = () => {
   if  (nav.classList.toggle('open')){
        navImg.src = './img/nav/nav_close.svg';
    } else {
        navImg.src = './img/nav/nav.svg';
    }
}

AOS.init();