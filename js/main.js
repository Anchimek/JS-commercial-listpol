const navUl = document.querySelector('.header-nav__ul')
const footerNav = document.querySelector('.footer-nav__ul')
import { navLinks, productItemsOption1, productItemsOption2, productItemsOption3 } from './const.js'

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
footerNav.innerHTML = writeNavItems().join(' ')
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

navUl.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        switchMenu()
        writeMenu()
    } else [
        writeMenu()
    ]
})

const loadBtn = document.querySelector('#load-items')
const offerItemsContainer = document.querySelector('.section-items__container')
const writeOfferItems = (products, amount = 20) => {
    loadBtn.style.display = 'block'
    return products.map( (item, index) => {
        if(index < amount) {
            return (
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
                    <img src='./img/${item.img}' alt=${item.alt} />
                </div>
                `
    )}})
}
offerItemsContainer.innerHTML = writeOfferItems(productItemsOption1, 6).join(' ')

let currentItems = productItemsOption1
const op1 = document.getElementById('option1')
const op2 = document.getElementById('option2')
const op3 = document.getElementById('option3')
function selectOption(id) {
    const option = 
        id === 'option1' ?
            productItemsOption1
        : id === 'option2' ? 
            productItemsOption2  
        : 
            productItemsOption3
    
    currentItems = option
    offerItemsContainer.innerHTML = writeOfferItems(option, 6).join(' ')
}
op1.addEventListener('click', e => selectOption(e.target.id))
op2.addEventListener('click', e => selectOption(e.target.id))
op3.addEventListener('click', e => selectOption(e.target.id))


loadBtn.addEventListener('click', () => showHiddenItems())
const showHiddenItems = () => {
    offerItemsContainer.innerHTML = writeOfferItems(currentItems).join(' ')
    loadBtn.style.display = 'none'
}

const main = document.querySelector('.main')
const header = document.querySelector('.header')
main.addEventListener('scroll', () => {
        if (main.scrollTop > 50){
                header.classList.add('active')
        }
        else {
                header.classList.remove('active')
        }
})
