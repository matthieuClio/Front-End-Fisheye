function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/Photos/PhotographersId/${portrait}`;
    
    function getUserCardDOM(index) {
        const article = document.createElement( 'article' );
        const figure = document.createElement( 'figure' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const divSecondary = document.createElement( 'div' );

        img.setAttribute("src", picture);
        img.setAttribute("id", id);
        div.setAttribute("class", "div_price");
        divSecondary.setAttribute("tabindex", index);
        h3.setAttribute("tabindex", index + 1);

        h2.textContent = name;
        h3.textContent = `${city}, ${country}`;
        p.textContent = tagline;
        div.textContent = `${price}€/jour`;

        article.appendChild(divSecondary);
        divSecondary.appendChild(figure);
        figure.appendChild(img);
        divSecondary.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        p.appendChild(div);

        article.addEventListener("click", () => {
            window.location = `photographer.html?${id}`;
            console.log(id);
        });

        article.addEventListener("keydown", (event) => {
            if(event.key == "Enter") {
                window.location = `photographer.html?${id}`;
                console.log(id);
            }
        });
        
        return (article);
    }
    return { getUserCardDOM }
}