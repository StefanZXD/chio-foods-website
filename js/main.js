// SCROLL ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// MIXITUP PORTFOLIO
let mixerPeoduct = mixitup('.product_container', {
    selectors: {
        target: '.product_card'
    },
    animation: {
        duration: 300
    }
});

// LINK ACTIVE WORK
const linkWork = document.querySelectorAll('.product_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))
