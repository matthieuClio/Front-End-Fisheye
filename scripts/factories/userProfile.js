function userProfileFactory(data) {

    const {name, city, tagline, portrait, price} = data;
    const photographerHeader = document.querySelector('.photograph-header__photograph-info');
    const photographerHeaderPhoto = document.querySelector(".photograph-header__photo__container");
    const pricingContainer = document.getElementById("pricing");
    const contactModal = document.querySelector(".modal span");
    console.log(data);

    function getUserProfileDOM() {
        const h1Header = document.createElement( 'h1' );
        const spanHeader = document.createElement( 'span' );
        const pHeader = document.createElement( 'p' );
        const imgHeader = document.createElement( 'img' );
        const divHeader = document.createElement( 'div' );
        const spanPricing = document.createElement( 'span' );

        h1Header.setAttribute("class", "photograph-header__photograph-info__name margin-bottom-text");
        h1Header.setAttribute("tabindex", "20");
        divHeader.setAttribute("tabindex", "21");
        spanHeader.setAttribute("class", "photograph-header__photograph-info__city margin-bottom-text");
        pHeader.setAttribute("class", "photograph-header__photograph-info__paragraph");
        imgHeader.setAttribute("src", `assets/Photos/PhotographersId/${portrait}`);
        imgHeader.setAttribute("class", "photograph-header__photo__container__image");

        h1Header.textContent = name;
        spanHeader.textContent = city;
        pHeader.textContent = tagline;
        spanPricing.textContent = price;
        contactModal.textContent = name;

        photographerHeader.appendChild(h1Header);
        photographerHeader.appendChild(divHeader);
        divHeader.appendChild(spanHeader);
        divHeader.appendChild(pHeader);
        photographerHeaderPhoto.appendChild(imgHeader);
        pricingContainer.appendChild(spanPricing);
    }

    return { getUserProfileDOM }
}