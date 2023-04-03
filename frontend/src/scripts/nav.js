// export const showNav = () => {

//     const btn = document.querySelector('.nav-icon');
//     const ele = document.querySelector('.mobile-menus');    

//     btn.addEventListener('click',(e) => {

//         console.log(btn.classList.contains('open'))

//         if(btn.classList.contains('open') == false){
//             btn.classList.add('open')
//             ele.style.display='block'
//             ele.style.width='fit-content'
//         } else if(btn.classList.contains('open') == true){
//             btn.classList.remove('open')
//             ele.style.display='none'
//         }

//     })
// }


export const hideNav = () => {
    const nav = document.querySelector('.nav-container')
    const foot = document.querySelector('.footer-container')
    const mob = document.querySelector('.nav-mobile-container')
    const mobMenus = document.querySelector('.mobile-menus')

    if(nav && foot){
      nav.style.display = 'none'
      foot.style.display = 'none'
      mob.style.display = 'none'
      mobMenus.style.display = 'none'
    }


  }

