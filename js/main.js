const navUl = document.querySelector('.header-nav__ul')
const navLinks = [ 
    {
        id: 'homepage',
        title: 'strona główna'
    },
    {
        id: 'about',
        title: 'o nas'
    },
    {
        id: 'offer',
        title: 'oferta'
    },
    {
        id: 'partners',
        title: 'partnerzy'
    },
    {
        id: 'contact',
        title: 'kontakt'
    }
]

const writeNavItems = () => (
    navLinks.map( link => (
        `   <li>
                <a href="#${link.id}" target="_blank" rel="noopener">
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
