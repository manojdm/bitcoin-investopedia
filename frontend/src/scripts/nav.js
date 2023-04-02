const loadNav = () => {

    const btn = document.querySelector('.nav-icon');
    const ele = document.querySelector('.mobile-menus');    

    btn.addEventListener('click',(e) => {

        console.log(btn.classList.contains('open'))

        if(btn.classList.contains('open') == false){
            btn.classList.add('open')
            ele.style.display='block'
            ele.style.width='fit-content'
            console.log('2')
        } else if(btn.classList.contains('open') == true){
            btn.classList.remove('open')
            ele.style.display='none'
            console.log('1')
        }

    })
}

export default loadNav