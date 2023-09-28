const searchIcon = document.querySelector('#search')
const close = document.getElementById('close')

searchIcon.onclick = () => {
  document.querySelector('.search-form').classList.toggle('fade')
}

close.onclick = () => {
  document.querySelector('.search-form').classList.remove('fade')
}

// menu icon
const menuIcon = document.getElementById('menu-bars')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times')
  document.querySelector('.navbar').classList.toggle('fade')
}

// scroll spy
window.onscroll = () => {
  document.querySelector('.navbar').classList.remove('fade')
  document.getElementById('menu-bars').classList.remove('fa-times')
  const sectionEl = document.querySelectorAll('section')
  const navLinksEl = document.querySelectorAll('.navbar a')

  sectionEl.forEach((el) => {
    const heightScroll = window.scrollY
    const heightEl = el.offsetHeight
    const topEl = el.offsetTop - 45
    const id = el.getAttribute('id')

    if(heightScroll >= topEl && heightScroll <= heightEl + topEl){
      navLinksEl.forEach((link) => {
        link.classList.remove('active')
        document.querySelector('.navbar a[href*='+id+']').classList.add('active')
      })
    }
  })
}

// swiper
const homeSwiper = new Swiper('.home-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: 'swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

const reviewSwiper = new Swiper('.review-container', {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
})

