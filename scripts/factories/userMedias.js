function userMediasFactory(data) {
    const {image, likes, title, video, photographerId} = data;
    const folderPath = "./assets/Photos/PhotographerMedia/";

    function getUserMediaDOM() {
        const figure = document.createElement( 'figure' );
        const img = document.createElement( 'img' );
        const figcaption = document.createElement( 'figcaption' );
        const spanContainer = document.createElement( 'span' );
        const spanNumber = document.createElement( 'span' );
        const i = document.createElement( 'i' );

        figure.setAttribute("class", "media-container__figure");
        figcaption.setAttribute("class", "media-container__figure__figcaption");
        i.setAttribute("class", "fa-solid fa-heart media-container__figure__figcaption__icon");

        figcaption.textContent = title;
        spanNumber.textContent = likes;

        figure.addEventListener("click", () => {
            openLightbox(image, video, title, photographerId); // A CONTINUER !!!
        });

        // Media is a video
        if(image == undefined) {
            const videoElt = document.createElement( 'video' );
            const sourceMP4 = document.createElement( 'source' );

            videoElt.setAttribute("class", "media-container__figure__video");
            videoElt.setAttribute("alt", "Vidéo de la galerie d'image");
            videoElt.setAttribute("id", "video_id");
            videoElt.controls = true;
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
        figcaption.appendChild(spanContainer);
        spanContainer.appendChild(spanNumber);
        spanContainer.appendChild(i);
        
        return figure;
    }

    return { getUserMediaDOM }
}