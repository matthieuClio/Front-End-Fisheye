function openLightbox(image, video, title, mediaId) {
    const lightboxBackgroundElt = document.getElementById("lightbox-background");
    const lightboxImageElt = document.getElementById("lightbox-image");
    const lightboxVideoElt = document.getElementById("lightbox-video");
    const lightboxFigcaptionElt = document.getElementById("lightbox-figcaption");
    const folderPath = "./assets/Photos/PhotographerMedia/";

    // Debug informations display 
    console.log(mediaId + ' ' + image + ' ' + video + ' ' + title);

    // Display the lightbox with the medias data
    lightboxBackgroundElt.style.display = "flex";
    lightboxFigcaptionElt.textContent = title;

    // Display a video or a image
    if(image == undefined) {
        lightboxVideoElt.style.display = "block";
        lightboxVideoElt.src = folderPath + video;
    } else {
        lightboxImageElt.style.display = "block";
        lightboxImageElt.src = folderPath + image;
    }
}

function closeLightbox() {
    const lightboxBackgroundElt = document.getElementById("lightbox-background");
    const lightboxImageElt = document.getElementById("lightbox-image");
    const lightboxVideoElt = document.getElementById("lightbox-video");
    const closeLightboxIconElt = document.getElementById("close-lightbox");

    closeLightboxIconElt.addEventListener("click", ()=> {
        lightboxBackgroundElt.style.display = "none";
        lightboxImageElt.style.display = "none";
        lightboxVideoElt.style.display = "none";
    });
}

function switchMediaLightxbox(image, video, title, mediaId, allMediasId, mediaImage, mediaVideo, mediaTitle) {
    const lightboxImageElt = document.getElementById("lightbox-image");
    const lightboxVideoElt = document.getElementById("lightbox-video");
    const chevronLeftElt = document.getElementById("chevron-left-icon");
    const chevronRightElt = document.getElementById("chevron-right-icon");
    const lightboxFigcaptionElt = document.getElementById("lightbox-figcaption");
    const folderPath = "./assets/Photos/PhotographerMedia/";
    const chevronLeftCloneElt = chevronLeftElt.cloneNode(true);
    const chevronRightCloneElt = chevronRightElt.cloneNode(true);

    // Max length of array allMediasId
    const LightboxLength = allMediasId.length -1;

    // Lightbox index
    let lightboxIndex = allMediasId.indexOf(mediaId);

    chevronLeftElt.parentNode.replaceChild(chevronLeftCloneElt, chevronLeftElt);
    chevronRightElt.parentNode.replaceChild(chevronRightCloneElt, chevronRightElt);

    // Events
    chevronLeftCloneElt.addEventListener("click", leftChevron);
    chevronRightCloneElt.addEventListener("click", rightChevron);

    // chevronLeftElt.removeEventListener("click", test1, true);

    function leftChevron() {
        if(lightboxIndex > 0 ) {

            lightboxIndex -= 1;
            changeImageVideo();
        } 
        else if(lightboxIndex == 0) {
            lightboxIndex = LightboxLength;
            changeImageVideo();
        }
        console.log(lightboxIndex);
        // console.log(mediaId);
    }
    
    function rightChevron() {
        if(lightboxIndex < LightboxLength) {
            lightboxIndex += 1;
            changeImageVideo();
        } 
        else if(lightboxIndex == LightboxLength) {
            lightboxIndex = 0;
            changeImageVideo();
        }
        console.log(lightboxIndex);
    };

    function changeImageVideo() {
        lightboxFigcaptionElt.textContent = mediaTitle[lightboxIndex];
    
        if(mediaImage[lightboxIndex] != undefined) {
            lightboxImageElt.src = folderPath + mediaImage[lightboxIndex];
            lightboxImageElt.style.display = "block";
            lightboxVideoElt.style.display = "none";
        }
        else if(mediaImage[lightboxIndex] == undefined) {
            lightboxVideoElt.src = folderPath + mediaVideo[lightboxIndex];
            lightboxImageElt.style.display = "none";
            lightboxVideoElt.style.display = "block";
        }
    }

    console.log(allMediasId); // Debug 
    console.log(LightboxLength); // Debug 
    console.log(lightboxIndex); // Debug
    console.log('switchMediaLightxbox');
}