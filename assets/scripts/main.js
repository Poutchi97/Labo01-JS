'use strict';

function init() {
    const template = {
        menuItems: `
        <li>
            <a href="{ link }">{ title }</a>
        </li>
        `
    };

    const dom = {
        nav: document.querySelector('nav>ul'),
    };

    const menuItems = [
        { title: 'Index', link: 'index.html' },
        { title: `Panier<span id=cart-count></span>`, link: 'cart.html' }
    ];

    const updateCartCount = (el) => {

    }

    const loadNav = () => {
        dom.nav.innerHTML = renderEngine.renderItems(template.menuItems, menuItems);
    }

    loadNav();

}

document.addEventListener("DOMContentLoaded", init);
