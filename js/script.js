// const menu = document.querySelector('#menu')
// const menuBtn = document.querySelector('#menu-btn')

// const handleClick = () => {
//   if (menu.classList.contains('hidden')) {
//     menuBtn.classList.add('open')
//     menu.classList.remove('hidden')
//     menu.classList.add('flex')
//   } else {
//     menuBtn.classList.remove('open')
//     menu.classList.add('hidden')
//     menu.classList.remove('flex')
//   }
// }
// menuBtn.addEventListener('click', handleClick)
// --------------------------------------------------

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  nav.classList.toggle('flex')
})
