function userMediasFactory(data, allMediasId, mediaImage, mediaVideo, mediaTitle) {
    const {image, likes, title, video, id} = data;
    const folderPath = "./assets/Photos/PhotographerMedia/";

    function getUserMediaDOM() {
        const figure = document.createElement( 'figure' );
        const img = document.createElement( 'img' );
        const figcaption = document.createElement( 'figcaption' );
        const spanText = document.createElement( 'span' );
        const spanContainer = document.createElement( 'span' );
        const spanNumber = document.createElement( 'span' );
        const i = document.createElement( 'i' );

        figure.setAttribute("class", "media-container__figure cursor-pointer");
        figcaption.setAttribute("class", "media-container__figure__figcaption");
        spanText.setAttribute("class", "span-text"); // Class added for select the element with JavaScript on photographer.js
        i.setAttribute("class", "fa-solid fa-heart media-container__figure__figcaption__icon");
        spanNumber.setAttribute("class", "span-number"); // Class added for select the element with JavaScript on photographer.js

        spanText.textContent = title;
        spanNumber.textContent = likes;
        
        // Call lightbox functions for each object
        figure.addEventListener("click", () => {
            openLightbox(image, video, title, id);
            closeLightbox();
            switchMediaLightxbox(image, video, title, id, allMediasId, mediaImage, mediaVideo, mediaTitle);
        });

        // Media is a video
        if(image == undefined) {
            const videoElt = document.createElement( 'video' );
            const sourceMP4 = document.createElement( 'source' );

            videoElt.setAttribute("class", "media-container__figure__video");
            videoElt.setAttribute("alt", "Vidéo de la galerie d'image");
            videoElt.setAttribute("id", "video_id");
            videoElt.controls = false; 
            sourceMP4.source = "video/mp4";
            sourceMP4.src = folderPath + video;

            figure.appendChild(videoElt);
            videoElt.appendChild(sourceMP4);

        } else { // Media is a image
            img.setAttribute("src", folderPath + image);
            img.setAttribute("class", "media-container__figure__image");
            img.setAttribute("alt", "Image de la galerie d'image");

            figure.appendChild(img);
        }

        figure.appendChild(figcaption);
        figcaption.appendChild(spanText);
        figcaption.appendChild(spanContainer);
        spanContainer.appendChild(spanNumber);
        spanContainer.appendChild(i);
        
        return figure;
    }

    return { getUserMediaDOM }
}