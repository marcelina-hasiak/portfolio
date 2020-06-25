import '../scss/main.scss';
/* HAMBURGER MENU */

const hamburgerButton = document.querySelector('.hamburger-menu--js')
const navigation = document.querySelector('.navigation--js')
const navigationBar = document.querySelector('.navigation__bar--js')
const hamburgerBackground = document.querySelector('.hamburger-menu-bg--js')

hamburgerButton.addEventListener('click', () => {
    navigation.classList.add('navigation--open')
    navigationBar.classList.add('navigation__bar--open')
    hamburgerBackground.classList.add('hamburger-menu-bg--open')
    hamburgerButton.classList.add('closed')
})

hamburgerBackground.addEventListener('click', (e) => {
    navigation.classList.remove('navigation--open')
    navigationBar.classList.remove('navigation__bar--open')
    hamburgerBackground.classList.remove('hamburger-menu-bg--open')
    hamburgerButton.classList.remove('closed')
})
