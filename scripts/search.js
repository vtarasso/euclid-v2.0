// const open = document.querySelector('#search-open')
// const searchForm = document.querySelector('#search-form')
// const close = document.querySelector('#search-close')

// open.addEventListener('click', function() {
//   searchForm.classList.add('search-form_show')
// })

// close.addEventListener('click', function() {
//   searchForm.classList.remove('search-form_show')
// })
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('search-open').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
    setTimeout(clear, 1000)
  })
})

//clear input value
function clear() {
  document.getElementById('search-form__input').value = '';
}