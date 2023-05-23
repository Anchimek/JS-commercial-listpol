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
        `<li>
            <a href="#${link.id}" target="_blank" rel="noopener">
                ${link.title}
            </a>
        </li>
        `
    ))
)

navUl.innerHTML = writeNavItems().join(' ')
