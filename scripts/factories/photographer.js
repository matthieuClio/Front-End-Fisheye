function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/Photos/PhotographersId/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'p' );
        h2.textContent = name;
        h3.textContent = 'test';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}