


// TOGGLE NAV

const menuBt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')
const navBts = document.querySelectorAll('header nav a')
const navOverflow = document.querySelector('.nav_overflow')

let showingMenu = false;


function toggleNav() {
    if(showingMenu == false) {

        nav.classList.add('show')
        menuBt.classList.add('close')

        navOverflow.style.pointerEvents = 'unset'

        showingMenu = true;
    } else {

        nav.classList.remove('show')
        menuBt.classList.remove('close')

        navOverflow.style.pointerEvents = 'none'

        showingMenu = false;
    }
}

menuBt.addEventListener('click', toggleNav)


let touchstartX = 0
let touchendX = 0

let touchstartY = 0
let touchendY = 0
    
function checkDirection() {

    if(window.matchMedia('(max-width: 800px)').matches) {
        if((touchendX + (window.innerWidth / 1.9)) < touchstartX && touchendY < (touchstartY + 100) && touchendY > (touchstartY - 100)) {
    
            if(showingMenu == false) {
                toggleNav()
            }
        }
    
        if(touchendX > (touchstartX + 30)) {
    
            // console.log(touchstartX + ", " + touchendX)

            if(showingMenu == true) {
                toggleNav()
            }
        }
    }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})

window.addEventListener('scroll', function() {
    if(showingMenu == true) {
        toggleNav()
    }
})