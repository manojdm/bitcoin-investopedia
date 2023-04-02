
const loadNav = () => {
    const width = screen.width

    const nav = document.querySelector('.nav-container')
    const foot = document.querySelector('.footer-container')
    const mob = document.querySelector('.nav-mobile-container')


    if(width > 820){
        if(nav && foot){
            nav.style.display = 'flex'
            foot.style.display = 'flex'
            mob.style.display = 'none'
        }
    } else {
        if(nav && foot){
            nav.style.display = 'none'
            foot.style.display = 'flex'
            mob.style.display = 'flex'
        }
    }
}

export default loadNav