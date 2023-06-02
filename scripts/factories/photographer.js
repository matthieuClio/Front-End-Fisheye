function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/Photos/PhotographersId/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const figure = document.createElement( 'figure' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );

        img.setAttribute("src", picture);
        img.setAttribute("id", id);

        h2.textContent = name;
        h3.textContent = `${city}, ${country}`;
        p.textContent = tagline;
        div.textContent = `${price}€/jour`;

        article.appendChild(figure);
        figure.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        p.appendChild(div);

        img.addEventListener("click", () => {
            window.location = `photographer.html?${id}`;
            console.log(id);
        });

        return (article);
    }
    return { getUserCardDOM }
}