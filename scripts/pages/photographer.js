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
        console.log('Nb Photographer');

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

async function displayInformationsPhotographer(photographersData) {
    // Photographer identity informations
    const userInfo = userProfileFactory(photographersData);
    userInfo.getUserProfileDOM();
}

async function displayInformationsMedia(mediasData) {
    // Arrays for specific data
    const mediaImage = [];
    const mediaVideo = [];
    const mediaTitle = [];
    const mediaId = [];  
    let mediasElt = []; // For contain all DOM media

    // Photographer medias informations
    const mediaContainer = document.querySelector(".media-container");
    
    // Build arrays content specific data from mediasData
    mediasData.forEach((element) => {
        mediaId.push(element.id);
        mediaImage.push(element.image);
        mediaVideo.push(element.video);
        mediaTitle.push(element.title);
    })
    console.log(mediaId);

    // Create Dom element for each media
    mediasData.forEach((media) => {
        const userMedias = userMediasFactory(media, mediaId, mediaImage, mediaVideo, mediaTitle);
        const UserMediaDOM = userMedias.getUserMediaDOM(); // Return DOM container 
        mediaContainer.appendChild(UserMediaDOM);
        mediasElt.push(UserMediaDOM);
    });
    return mediasElt;
}

async function sortInformations(allMediasElt, mediasData) {
    // <Delete all media ELT
    allMediasElt.forEach((element) => {
        element.remove();
    });
    
    // Sort by popularity

    // Sort by date

    // Sort by name
    // Do a sort
    let sortLikeMediaData = mediasData.sort((a,b) => a.likes - b.likes);
    console.log(sortLikeMediaData);

    // Call again a display informations function with sort media
    displayInformationsMedia(mediasData);


    // MAUVAISE METHODE ;(
    // const mediaContainerElt = document.querySelector(".media-container");
    // mediaContainerElt.appendChild(allMediasElt[2]);
    // mediaContainerElt.appendChild(allMediasElt[3]);
    // mediaContainerElt.appendChild(allMediasElt[1]);
    // console.log(mediaContainerElt);
    // console.log(mediasData[0].likes);
}

// Main function
async function init() {
    // Initialize contact modal functions
    displayModal();
    closeModal();
    sendData();

    // Get id user
    const urlId = await getUserId();
    const idUser = urlId.paramUrl;

    // Get photographer datas
    const photographerAndMediaDatas = await getPhotographers(idUser);
    
    // Display photographers personal informations
    await displayInformationsPhotographer(photographerAndMediaDatas.photographersData);

    // Display photographers personal media
    let allMediasElt = await displayInformationsMedia(photographerAndMediaDatas.mediasData);

    // Sort photographers personal informations
    await sortInformations(allMediasElt, photographerAndMediaDatas.mediasData);
};

init();