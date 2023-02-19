window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('styicky', window.scrollY > 0)
})
