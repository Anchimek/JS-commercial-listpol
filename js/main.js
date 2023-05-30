const navUl = document.querySelector('.header-nav__ul')
import { navLinks, productItems } from './const.js'

const writeNavItems = () => (
    navLinks.map( link => (
        `   <li>
                <a href="#${link.id}" rel="noopener">
                    ${link.title}
                </a>
            </li>
        `
    ))
)
navUl.innerHTML = writeNavItems().join(' ')

const menuContainer = document.querySelector('.header-menu__container')
function writeMenu(imgSrc = '') {

    const imgUrl = () => {
        if(imgSrc.length === 0 ) {
            return 'menu'
        } else {
            return  imgSrc.includes('golden') ? 'menu' : 'menu_golden'
        }
    }

    menuContainer.innerHTML = `
        <img src="./img/${imgUrl()}.png" alt="menu" class="header-img__menu" />
    `

    const menu = document.querySelector('.header-img__menu')
    menu.addEventListener('click', e => switchMenu(e))
    menu.addEventListener('click', e => writeMenu(e.target.src))
}
writeMenu()

const navContainer = document.querySelector('.header-nav')
function switchMenu(e) {
    navContainer.classList.toggle('sidebar')
    navContainer.style.display = 
        navContainer.style.display === 'flex' ? 'none' : 'flex'
}

const offerItemsContainer = document.querySelector('.section-items__container')
const writeOfferItems = () => (

    productItems.map( item => (
    `   
        <div class='section-items__item'>
            <h4>${item.heading}</h4>
            <div class='section-items__params'>
                <span class='section-items__price golden'>
                    ${item.price} zł/mb
                </span>
                <span>
                    ${item.type}
                </span>
                <span class='section-items__surface golden'>
                    ${item.surface} mm
                </span>
            </div>
            <img src='./img/${item.img}' alt=${item.id} />
            
            <div class='container-white__gradient'></div>
            <div class='container-golden__gradient'></div>
        </div>
    `
    ))
)
offerItemsContainer.innerHTML = writeOfferItems().join(' ')