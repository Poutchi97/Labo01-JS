'use strict';

function init() {
    const templates = {
        card: `
        <div class="card-col { categorie }">
            <div class="card data-id="{ id }">
            <div class="overlay"> +</div>
                <div class="card-top">
                    <img src="assets/images/{ image }">
                </div>
                <div class="card-content"> { name } </div>
                <div class="card-bottom">
                    <span class"price"> { price } €</span>
                    <span class"separator"> | </span>
                    <span class"quantity"> Quantité : { quantity }</span>
                </div>
            </div>
        </div>
        `
    };

    const dom = {
        cardContainer: document.querySelector('.card-container'),
    };

    const addToCart = e => {
        let id = e.target.getAttribute('data-id');
        card.add(id);
    }

    const loadItems = (items) => {
        dom.cardContainer.innerHTML = (renderEngine.renderItems(templates.card, DATA.products));
        const cards = document.querySelectorAll('.card');
        for (let card of cards) {
            card.addEventListener('click', addToCart);
        }
    };

    loadItems(DATA.products);
}

document.addEventListener('DOMContentLoaded', init);