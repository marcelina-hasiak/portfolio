import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import '../scss/main.scss';
import svg from "../assets/img/logo.svg";
/* CAROUSEL HANDLER */
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 20,
    animationDuration: 700,
    breakpoints: {
        1450: {
            perView: 2
          },
        1024: {
            perView: 3
          },
        850: {
          perView: 2
        },
        450: {
            perView: 1
        },
    },
}).mount({ Controls, Breakpoints })

/* HAMBURGER MENU */
const body = document.querySelector('body')
const logo = document.querySelector('.navigation__logo-link--js')
const hamburgerButton = document.querySelector('.hamburger-menu--js')
const navigation = document.querySelector('.navigation--js')
const navigationBar = document.querySelector('.navigation__bar--js')
const navigationLinks = document.querySelectorAll('.navigation__link--js')
const hamburgerBackground = document.querySelector('.hamburger-menu-bg--js')

hamburgerButton.addEventListener('click', () => {
    navigation.classList.add('navigation--open')
    navigationBar.classList.add('navigation__bar--open')
    hamburgerBackground.classList.add('hamburger-menu-bg--open')
    hamburgerButton.classList.add('closed')
    body.classList.add('prevent-scrolling')
})

hamburgerBackground.addEventListener('click', () => {
    navigation.classList.remove('navigation--open')
    navigationBar.classList.remove('navigation__bar--open')
    hamburgerBackground.classList.remove('hamburger-menu-bg--open')
    hamburgerButton.classList.remove('closed')
    body.classList.remove('prevent-scrolling')
})


logo.addEventListener('click', (e) => {
  if(navigation.classList.contains('navigation--open')) {
    navigation.classList.remove('navigation--open')
    navigationBar.classList.remove('navigation__bar--open')
    hamburgerBackground.classList.remove('hamburger-menu-bg--open')
    hamburgerButton.classList.remove('closed')
    body.classList.remove('prevent-scrolling')
  }
})


navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener('click', (e) => {
    if(navigation.classList.contains('navigation--open')) {
      navigation.classList.remove('navigation--open')
      navigationBar.classList.remove('navigation__bar--open')
      hamburgerBackground.classList.remove('hamburger-menu-bg--open')
      hamburgerButton.classList.remove('closed')
      body.classList.remove('prevent-scrolling')
    }
  })
})


/* HOBBY BUTTONS */

const buttonsHobby = document.querySelectorAll('.btn-hobby--js')

buttonsHobby.forEach((buttonHobby) => {
  buttonHobby.addEventListener('click', () => {
    body.classList.add('prevent-scrolling')
    createPopupWindow()
  })
})

//funckja wrzucająca template html, która zależy od tego, który przycisk został kliknięty, jako
//parametr przyjmuje obiekt


const createPopupWindow = () => {
  const markup = 
  ` <div class="dupa-1">
      <div class="modal-window">
        <button class="modal-window__button btn" href="#">
            <img class="modal-window__logo-img" src=${svg} alt="Marcelina Hasiak logo, just initials, nothing fency">
        </button>
      </div>
    </div>
  `
  body.classList.add('prevent-scrolling')
  body.insertAdjacentHTML("beforeend", markup)}




  
  const array1 = ['a', 'b', 'c'];

  const reducedValue = array1.reduce((prev, next) => {prev + next}, 'l');
  console.log(reducedValue)
  