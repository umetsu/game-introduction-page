function scrollAnime(margin) {
  const animElements = [...document.querySelectorAll('.anime')]
  const options = {
    root: null,
    rootMargin: `-${margin}% 0px`,
    threshold: 0,
  }
  const observer = new IntersectionObserver(handleIntersection, options)
  animElements.forEach((item) => {
    observer.observe(item)
  })

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animate')
      }
    })
  }
}

scrollAnime(20)
