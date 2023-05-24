"use strict";

var navUl = document.querySelector('.header-nav__ul');
var menu = document.querySelector('.header-img__menu');
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
    return "<li>\n            <a href=\"#".concat(link.id, "\" target=\"_blank\" rel=\"noopener\">\n                ").concat(link.title, "\n            </a>\n        </li>\n        ");
  });
};

navUl.innerHTML = writeNavItems().join(' ');
var navContainer = document.querySelector('.header-nav');
menu.addEventListener('click', function () {
  navContainer.classList.toggle('sidebar');
  navContainer.style.display = navContainer.style.display === 'flex' ? 'none' : 'flex';
});