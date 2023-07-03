"use strict";

var _const = require("./const.js");

var navUl = document.querySelector('.header-nav__ul');
var footerNav = document.querySelector('.footer-nav__ul');

var writeNavItems = function writeNavItems() {
  return _const.navLinks.map(function (link) {
    return "   <li>\n                <a href=\"#".concat(link.id, "\" rel=\"noopener\">\n                    ").concat(link.title, "\n                </a>\n            </li>\n        ");
  });
};

footerNav.innerHTML = writeNavItems().join(' ');
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

navUl.addEventListener('click', function () {
  if (window.innerWidth < 1000) {
    switchMenu();
    writeMenu();
  } else [writeMenu()];
});
var showElementsBtn = false;
var whichOption = '';
var loadBtn = document.querySelector('#load-items');
var offerItemsContainer = document.querySelector('.section-items__container');

var writeOfferItems = function writeOfferItems(products, showElementsBtn) {
  return showElementsBtn ? products.map(function (item) {
    console.log(showElementsBtn);
    loadBtn.style.display = 'none';
    return "   \n                <div class='section-items__item'>\n\n                    <h4>".concat(item.heading, "</h4>\n                    <div class='section-items__params'>\n                        <span class='section-items__price golden'>\n                            ").concat(item.price, " z\u0142/mb\n                        </span>\n                        <span>\n                            ").concat(item.type, "\n                        </span>\n                        <span class='section-items__surface golden'>\n                            ").concat(item.surface, " mm\n                        </span>\n                    </div>\n                    <img src='./img/").concat(item.img, "' alt=").concat(item.alt, " />\n                </div>\n                ");
  }) : products.map(function (item, index) {
    if (index < 6) {
      return "   \n                        <div class='section-items__item'>\n\n                            <h4>".concat(item.heading, "</h4>\n                            <div class='section-items__params'>\n                                <span class='section-items__price golden'>\n                                    ").concat(item.price, " z\u0142/mb\n                                </span>\n                                <span>\n                                    ").concat(item.type, "\n                                </span>\n                                <span class='section-items__surface golden'>\n                                    ").concat(item.surface, " mm\n                                </span>\n                            </div>\n                            <img src='./img/").concat(item.img, "' alt=").concat(item.alt, " />\n                        </div>\n                    ");
    }
  });
};

offerItemsContainer.innerHTML = writeOfferItems(_const.productItemsOption1, showElementsBtn).join(' ');
var op1 = document.getElementById('option1');
var op2 = document.getElementById('option2');
var op3 = document.getElementById('option3');

function selectOption(id) {
  showElementsBtn = true;
  var option = id === 'option1' ? _const.productItemsOption1 : id === 'option2' ? _const.productItemsOption2 : _const.productItemsOption3;
  writeOfferItems(option, showElementsBtn);
}

op1.addEventListener('click', function (e) {
  return selectOption(e.target.id);
});
op2.addEventListener('click', function (e) {
  return selectOption(e.target.id);
});
op3.addEventListener('click', function (e) {
  return selectOption(e.target.id);
});
loadBtn.addEventListener('click', function (e) {
  return showHiddenItems(e);
});

var showHiddenItems = function showHiddenItems(e) {
  console.log(e);
  showElementsBtn = true;
  offerItemsContainer.innerHTML = writeOfferItems(_const.productItemsOption1).join(' ');
};

var main = document.querySelector('.main');
var header = document.querySelector('.header');
main.addEventListener('scroll', function () {
  if (main.scrollTop > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});