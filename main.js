const headerNav= document.querySelector(".light_dark")

const buttonColor = document.querySelector(".light_dark__button");

const areaButton= document.querySelector(".light_dark__button-icon")

const sun = document.querySelector(".bi-brightness-high-fill");

const moon = document.querySelector(".bi-moon-fill");

const hamburger = document.querySelector(".navbar-toggler");

const hamburgerIn = document.querySelector(".bi-list");

const nav = document.querySelector(".collapse");

const navLink = document.querySelectorAll("a.nav-link");

const navBar = document.querySelector(".navbar")

const sect = document.querySelectorAll("section.secti")

const titleH2 = document.querySelector(".responsive-information__h2");







buttonColor.addEventListener("click",()=>{
  headerNav.classList.toggle("darkHeader")
  moon.classList.toggle('no-present');
  sun.classList.toggle('present');
  sun.classList.toggle('no-present');
  hamburger.classList.toggle('change')
  hamburgerIn.classList.toggle('change');
  nav.classList.toggle('change');
  areaButton.classList.toggle('change-area')

  for(let i = 0; i < navLink.length; i++){
    navLink[i].classList.toggle('change-item')
  }

  navBar.classList.toggle('dark-menu');

  for(let i = 0; i < sect.length; i++){
    sect[i].classList.toggle('navDark');
  }
  
  titleH2.classList.toggle('responsive-information__h2-white');
  
  
})

