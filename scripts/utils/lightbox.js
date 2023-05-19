function openLightbox(image, video, title, mediaId, allMediasId) {
    const lightboxBackgroundElt = document.getElementById("lightbox-background");
    const lightboxImageElt = document.getElementById("lightbox-image");
    const lightboxVideoElt = document.getElementById("lightbox-video");
    const lightboxFigcaptionElt = document.getElementById("lightbox-figcaption");
    const folderPath = "./assets/Photos/PhotographerMedia/";
    
    // Max length of array allMediasId
    const LightboxLength = allMediasId.length -1;

    // Lightbox index
    let lightboxIndex = allMediasId.indexOf(mediaId);

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

    console.log(allMediasId); // Debug 
    console.log(LightboxLength); // Debug 
    console.log(lightboxIndex); // Debug
}

function closeLightbox () {
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