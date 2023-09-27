document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('#burger')
  const menuLinks = document.querySelectorAll('.nav__link')
  const header = document.querySelector('.header')

  burger.addEventListener('click', () => {
    header.classList.toggle('open')
  })

  menuLinks.forEach((link) =>
    link.addEventListener('click', () => {
      header.classList.remove('open')
    })
  )

  // document.getElementById('burger').addEventListener('click', function(){
  //   document.querySelector('header').classList.toggle('open')
  // })
})