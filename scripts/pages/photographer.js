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
    let mediaLikesAll = 0;
    let mediasElt = []; // For contain all DOM media
    let likeNumber;

    // DOM elements
    const mediaContainer = document.querySelector(".media-container");
    const likeContainer = document.getElementById("like");

    // Build arrays content specific data from mediasData
    mediasData.forEach((element) => {
        mediaId.push(element.id);
        mediaImage.push(element.image);
        mediaVideo.push(element.video);
        mediaTitle.push(element.title);
        mediaLikesAll = mediaLikesAll + element.likes;
    })
    console.log(mediaId);

    // Verify if likeContainer is already initialize (with a number)
    likeNumber = parseInt(likeContainer.textContent);

    if(isNaN(likeNumber)) {
        likeContainer.textContent = mediaLikesAll;
        likeNumber = parseInt(likeContainer.textContent);
    }

    // Create Dom element for each media
    mediasData.forEach((media, index) => {
        const userMedias = userMediasFactory(media, mediaId, mediaImage, mediaVideo, mediaTitle);
        const UserMediaDOM = userMedias.getUserMediaDOM(index + 26); // Return DOM container 

        mediaContainer.appendChild(UserMediaDOM);
        mediasElt.push(UserMediaDOM);
    });
    return mediasElt;
}

async function sortInformations(allMediasElt, mediasData) {
    const orderByPopularityElt = document.getElementById("order-by-popularity");
    const orderByDateElt = document.getElementById("order-by-date");
    const orderByTitleElt = document.getElementById("order-by-title");
    const mediaContainerElt = document.querySelector(".media-container");

    // Delete all media DOM
    async function deleteMedias() {
        mediaContainerElt.innerHTML = "";

        // allMediasElt.forEach((element) => {
        //     element.remove();
        // });
    }

    // Sort event
    // ..........
    // Sort by popularity
    orderByPopularityElt.addEventListener("click", sortByPopularity); 
    // Sort by date
    orderByDateElt.addEventListener("click", sortByDate);
    // Sort by name
    orderByTitleElt.addEventListener("click", sortByName);
    
    // Sort functions
    // .............
    async function sortByPopularity() {
        // Delete
        await deleteMedias();
        // Sort
        mediasData.sort((a,b) => b.likes - a.likes);
        // Display media again
        allMediasElt = await displayInformationsMedia(mediasData);
        console.log(mediasData);
    }

    async function sortByDate() {
        // Delete
        deleteMedias();
        // Sort
        mediasData.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        // Display again
        allMediasElt = await displayInformationsMedia(mediasData);
        console.log(mediasData);
    }

    async function sortByName() {
        // Delete
        deleteMedias();
        // Sort
        mediasData.sort((a, b) => a.title.localeCompare(b.title));
        // Display again
        allMediasElt = await displayInformationsMedia(mediasData);
        console.log(mediasData);
    }
}

// Main function
async function init() {
    // Initialize contact modal functions
    displayModal();
    closeModal();
    sendData();

    // Initialize sort display container
    sortDisplaylist();

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