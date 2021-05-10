;(function () {
  const screenOffset = window.innerHeight * 0.6
  const elements = document.getElementsByClassName('fadein')
  for (const element of elements) {
    window.addEventListener('scroll', () => {
      if (window.scrollY + screenOffset > element.offsetTop) {
        element.classList.add('is-animate')
      }
    })
  }
})()
