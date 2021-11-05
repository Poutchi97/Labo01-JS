class RenderEngine {
    /**
     * Render prend un template et un model
     * récupère les clés de l'objet (model)
     * remplace toutes lesRegExp key par le model[key]
     * return le template avec les {key} qui ont pris les données de l'objet model
     * grâce aux clés récupérées avec Objet.keys(model)
     * 
     * Object.keys(model) => récupère les clés d'un objet
     */

    render = (template, model) => {
        if (!model) return template;
        for (let key of Object.keys(model)) {
            template = template.replaceAll(new RegExp(`{ *${key} *}`, 'g'), model[key])
        }
        return template;
    };

    /**
     * Return a map (table) from table menuItems
     *  
     *  du résultat de render
     *  map(callback)
     *  .join('') pour pouvoir avoir les deux objets de menuItems?
     */

    renderItems = (template, items) => {
        return items.map(item => this.render(template, item)).join('');
    };
}

class Card {
    get = () => {
        return JSON.parse(localStorage.getItem('CARD') || '[]');
    };

    save = () => {
        localStorage.setItem('CARD', JSON.stringify(this.card));
    }

    add = (id) => {
        // Return true or false in the var line 
        let line = this.card.find(item => item.product.id == id);
        if (!line) {
            this.card.push({ product: DATA.products.find(prod => prod.id == id), quantity: 1 });
        }
        else {
            line.quantity++;
        }

        this.save();
    }

    // publishChanges() {
    //     for (let sub of this.add.subscribtions) {
    //         sub();
    //     }
    // }

    // subscribtions = [];


    card = this.get();
}

const card = new Card();
const renderEngine = new RenderEngine();