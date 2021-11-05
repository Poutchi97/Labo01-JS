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
     *  return une map (tableau) du tableau menuItems
     *  du résultat de render
     *  map(callback)
     *  .join('') pour pouvoir avoir les deux objets de menuItems?
     */

    renderItems = (template, items) => {
        return items.map(item => this.render(template, item)).join('');
    };
}

const renderEngine = new RenderEngine();