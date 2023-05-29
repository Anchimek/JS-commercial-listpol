"use strict";

var navUl = document.querySelector('.header-nav__ul');
var navLinks = [{
  id: 'homepage',
  title: 'strona główna'
}, {
  id: 'about',
  title: 'o nas'
}, {
  id: 'offer',
  title: 'oferta'
}, {
  id: 'partners',
  title: 'partnerzy'
}, {
  id: 'contact',
  title: 'kontakt'
}];

var writeNavItems = function writeNavItems() {
  return navLinks.map(function (link) {
    return "   <li>\n                <a href=\"#".concat(link.id, "\" target=\"_blank\" rel=\"noopener\">\n                    ").concat(link.title, "\n                </a>\n            </li>\n        ");
  });
};

navUl.innerHTML = writeNavItems().join(' ');
var menuContainer = document.querySelector('.header-menu__container');

function writeMenu() {
  var imgSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var imgUrl = function imgUrl() {
    if (imgSrc.length === 0) {
      return 'menu';
    } else {
      return imgSrc.includes('golden') ? 'menu' : 'menu_golden';
    }
  };

  menuContainer.innerHTML = "\n        <img src=\"./img/".concat(imgUrl(), ".png\" alt=\"menu\" class=\"header-img__menu\" />\n    ");
  var menu = document.querySelector('.header-img__menu');
  menu.addEventListener('click', function (e) {
    return switchMenu(e);
  });
  menu.addEventListener('click', function (e) {
    return writeMenu(e.target.src);
  });
}

writeMenu();
var navContainer = document.querySelector('.header-nav');

function switchMenu(e) {
  navContainer.classList.toggle('sidebar');
  navContainer.style.display = navContainer.style.display === 'flex' ? 'none' : 'flex';
}