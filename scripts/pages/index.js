async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    // let photographers = [
    //     {
    //         "name": "Ma data test",
    //         "id": 1,
    //         "city": "Paris",
    //         "country": "France",
    //         "tagline": "Ceci est ma data test",
    //         "price": 400,
    //         "portrait": "account.png"
    //     },
    //     {
    //         "name": "Autre data test",
    //         "id": 2,
    //         "city": "Londres",
    //         "country": "UK",
    //         "tagline": "Ceci est ma data test 2",
    //         "price": 500,
    //         "portrait": "account.png"
    //     },
    // ]
    const response = await fetch('./data/photographers.json');
    const apiInternal = await response.json(); // response contain photographers and media object
    const photographers = apiInternal.photographers; // apiInternal.photographers relative to photographers object
    console.log(apiInternal);
    
    // et bien retourner le tableau photographers seulement une fois récupéré
    // return ({ photographers: [...photographers] })
    return ({ photographers })
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();

        userCardDOM.setAttribute("id", photographer.id);
        photographersSection.appendChild(userCardDOM);

        userCardDOM.addEventListener("click", () => {
            window.location = `photographer.html?${photographer.id}`;
            console.log(photographer.id);
        });
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers }  = await getPhotographers();

    // Show photographers datas
    displayData(photographers);
};

init();