import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import '../scss/main.scss';

/* CAROUSEL HANDLER */
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 20,
    animationDuration: 700,
    breakpoints: {
          1160: {
            perView: 1
          },
        1023: {
            perView: 2
          },
        700: {
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

hamburgerButton.addEventListener('click', hamburgerMenuHandler)
hamburgerBackground.addEventListener('click', hamburgerMenuHandler)

logo.addEventListener('click', () => {
  if(navigation.classList.contains('navigation--open')) {
    hamburgerMenuHandler()
  }
})

navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener('click', (e) => {
    if(navigation.classList.contains('navigation--open')) {
      hamburgerMenuHandler()
    }
  })
})

function hamburgerMenuHandler() {
  navigation.classList.toggle('navigation--open')
  navigationBar.classList.toggle('navigation__bar--open')
  hamburgerBackground.classList.toggle('hamburger-menu-bg--open')
  hamburgerButton.classList.toggle('closed')
  body.classList.toggle('prevent-scrolling')
}

/* FIXED MENU */

const heroSection = document.querySelector('.hero-layout--js')
const projectAnchor = document.querySelector('[data-anchor=projects]')

const menuOptions = {
  threshold: 0.01,
}

const heroSectionObserver = new IntersectionObserver(setMenuPosition, menuOptions)

function setMenuPosition(entry) {
  if (!entry[0].isIntersecting) {
    navigation.classList.add('navigation--fixed')
    projectAnchor.classList.remove('navigation__link--important')
  } else {
    navigation.classList.remove('navigation--fixed')
    projectAnchor.classList.add('navigation__link--important')
  }
}

heroSectionObserver.observe(heroSection)


/* ANCHOR SECTION */

const anchorSections = document.querySelectorAll('[data-anchor-section]')

const anchorSectionsOptions = {
  //threshold: 0.2,
  rootMargin: '-30% 0% -70% 0%',
}

const anchorSectionsObserver = new IntersectionObserver(setAnchorSection, anchorSectionsOptions)

function setAnchorSection(entries) {
  entries.forEach(entry => {
    const activeAnchor = document.querySelector(`[data-anchor=${entry.target.id}]`)
    if (!entry.isIntersecting) {
      activeAnchor.classList.remove('active-anchor')
    }
    if (entry.isIntersecting) {
    
    activeAnchor.classList.add('active-anchor')
    } 
  })
}

anchorSections.forEach(section => {anchorSectionsObserver.observe(section)})

  