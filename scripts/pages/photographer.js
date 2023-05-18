//Mettre le code JavaScript lié à la page photographer.html

// Get id photographer url
async function getUserId() {
    let paramUrl = window.location.search;
    paramUrl = paramUrl.substring(1);

    return ({ paramUrl });
}

// Get photographers datas
async function getPhotographers(id) {

    // Get api data
    const response = await fetch('./data/photographers.json');
    const apiInternal = await response.json(); // response contain photographers and media object
    const photographers = apiInternal.photographers; // apiInternal.photographers reference to photographers object
    const media = apiInternal.media; // apiInternal.media reference to media object
    console.log('Test API'); // Test API - Can be delete
    console.log(apiInternal); // Test API - Can be delete

    // Get specific data of photographer
    let count = 0;
    let dataLength = photographers.length;
    let findPhotographer = false;
    const idUser = id;
    let photographersData;
    let mediasData = [];

    // Get specific photographer data
    while(count < dataLength && !findPhotographer) {
        console.log('Photographer not find');

        if(photographers[count].id == idUser) {
            photographersData = photographers[count];
            findPhotographer = true;

            // console.log(photographersData);
            console.log('photographer found : ' + findPhotographer);
        }
        count++;
    }

    // Get specific medias data
    media.forEach(element => { // Element relative to media
        if(idUser == element.photographerId) {
            mediasData.push(element);
        }
    });

    return ({photographersData, mediasData});
}

async function displayInformations(photographerAndMediaDatas) {
    // Photographer identity informations
    const userInfo = userProfileFactory(photographerAndMediaDatas.photographersData);
    userInfo.getUserProfileDOM();

    // Photographer medias informations
    const mediaContainer = document.querySelector(".media-container");
    
    photographerAndMediaDatas.mediasData.forEach((media) => {
        const userMedias = userMediasFactory(media);
        const UserMediaDOM = userMedias.getUserMediaDOM(); // Return DOM container 
        mediaContainer.appendChild(UserMediaDOM);
    });
    
}

// Main function
async function init() {
    // Initialize modal functions
    displayModal();
    closeModal();
    sendData();

    // Get id user
    const urlId = await getUserId();
    const idUser = urlId.paramUrl; 
    // console.log(idUser);

    // Get photographer data
    const photographerAndMediaDatas = await getPhotographers(idUser);

    // Display photographers personal informations
    displayInformations(photographerAndMediaDatas);
};

init();