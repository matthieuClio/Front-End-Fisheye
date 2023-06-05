function photographerFactory (data) {
    const { id, name, portrait, city, country, tagline, price } = data
    const picture = `assets/Photos/PhotographersId/${portrait}`

    function getUserCardDOM (index) {
        const article = document.createElement('article')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const div = document.createElement('div')

        img.setAttribute('alt', name)
        img.setAttribute('src', picture)
        img.setAttribute('id', id)
        span.setAttribute('class', 'div_price')
        div.setAttribute('tabindex', index)
        h3.setAttribute('tabindex', index + 1)
        h2.setAttribute('class', 'cursor-pointer')

        h2.textContent = name
        h3.textContent = `${city}, ${country}`
        p.textContent = tagline
        span.textContent = `${price}€/jour`

        article.appendChild(div)
        div.appendChild(figure)
        figure.appendChild(img)
        div.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(p)
        p.appendChild(span)

        div.addEventListener('click', () => {
            window.location = `photographer.html?${id}`
            console.log(id)
        })

        div.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                window.location = `photographer.html?${id}`
                console.log(id)
            }
        })

        return (article)
    }
    return { getUserCardDOM }
}
