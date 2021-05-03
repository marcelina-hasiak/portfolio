import Glide, {
  Controls,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm'
import '../scss/main.scss'

/* CAROUSEL HANDLER */
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 2,
  gap: 20,
  animationDuration: 700,
  breakpoints: {
    1160: {
      perView: 1,
    },
    1023: {
      perView: 2,
    },
    700: {
      perView: 1,
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
  if (navigation.classList.contains('navigation--open')) {
    hamburgerMenuHandler()
  }
})

navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener('click', (e) => {
    if (navigation.classList.contains('navigation--open')) {
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
  if (hamburgerButton.classList.contains('animation__navigation')) {
    hamburgerButton.classList.remove('animation__navigation')
    hamburgerButton.classList.add('visible')
  }
}

/* FIXED MENU */
const heroSection = document.querySelector('.hero-layout--js')
const projectAnchor = document.querySelector('[data-anchor=projects]')

setIntersectionObserver(setMenuPosition, { threshold: 0.01 }, heroSection)

function setMenuPosition(entry) {
  if (!entry[0].isIntersecting) {
    projectAnchor.classList.remove('navigation__link--active')
    navigation.classList.add('navigation--fixed')
  } else {
    navigation.classList.remove('navigation--fixed')
    projectAnchor.classList.add('navigation__link--active')
  }
}

/* ANCHOR SECTION */
const anchorSections = document.querySelectorAll('[data-anchor-section]')

setIntersectionObserver(
  setAnchorSection,
  { rootMargin: '-30% 0% -70% 0%' },
  anchorSections,
)

function setAnchorSection(entries) {
  entries.forEach((entry) => {
    const activeAnchor = document.querySelector(
      `[data-anchor=${entry.target.id}]`,
    )
    !entry.isIntersecting
      ? activeAnchor.classList.remove('active-anchor')
      : activeAnchor.classList.add('active-anchor')
  })
}

/* ANIMATIONS */
//carousel
const carousel = document.querySelector('.glide__wrapper--js')

setIntersectionObserver(animateCarousel, { threshold: 0.5 }, carousel)

function animateCarousel(entry, observer) {
  if (!entry[0].isIntersecting) {
    return
  }
  carousel.classList.toggle('animation__carousel')
  observer.unobserve(carousel)
}

//hobby-cards
const cardHobbySection = document.querySelector('.about__cards-wrapper--js')

setIntersectionObserver(animateCardsHobby, { threshold: 0.4 }, cardHobbySection)

function animateCardsHobby(entry, observer) {
  const deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width
  if (!entry[0].isIntersecting) {
    return
  }
  if (deviceWidth > 1023) {
    const cardsHobby = entry[0].target.children
    for (let i = 0; i < cardsHobby.length; i++) {
      cardsHobby[i].classList.add('animation__card-hobby')
      cardsHobby[i].style.animationDelay = `${i / 5}s`
    }
  } else {
    cardHobbySection.classList.add('animation__card-hobby')
  }
  observer.unobserve(cardHobbySection)
}

//projects-images
const projectsImages = document.querySelectorAll('.projects__image--js')

setIntersectionObserver(
  animateProjectsImages,
  { threshold: 0.6 },
  projectsImages,
)

function animateProjectsImages(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.dataset.position === 'left'
      ? entry.target.classList.add('animation__projectImageRight')
      : entry.target.classList.add('animation__projectImageLeft')

    observer.unobserve(entry.target)
  })
}


function setIntersectionObserver(callback, options, target) {
  const observer = new IntersectionObserver(callback, options)
  target.length
    ? target.forEach((element) => observer.observe(element))
    : observer.observe(target)
}