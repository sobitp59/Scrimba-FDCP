let primaryNav = document.querySelector('.primary-navigation')
let navToggleBtn = document.querySelector('.nav-toggle')

navToggleBtn.addEventListener('click', ()=>{
    let visibility = primaryNav.getAttribute('data-visible')
    
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true)
        navToggleBtn.setAttribute('aria-expanded', true)
    }else{
        primaryNav.setAttribute('data-visible', false)
        navToggleBtn.setAttribute('aria-expanded', false)
    }
})