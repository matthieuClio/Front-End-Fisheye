function userMediasFactory (data, allMediasId, mediaImage, mediaVideo, mediaTitle) {
    const { image, likes, title, video, id } = data
    const folderPath = './assets/Photos/PhotographerMedia/'

    function getUserMediaDOM (index) {
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const figcaption = document.createElement('figcaption')
        const spanText = document.createElement('span')
        const spanContainer = document.createElement('span')
        const spanNumber = document.createElement('span')
        const spanLike = document.createElement('span')

        figure.setAttribute('class', 'media-container__figure')
        figcaption.setAttribute('class', 'media-container__figure__figcaption')
        spanText.setAttribute('class', 'span-text') // Class added for select the element with JavaScript on photographer.js
        spanText.setAttribute('tabindex', index)
        spanLike.setAttribute('class', 'fa-solid fa-heart media-container__figure__figcaption__icon cursor-pointer')
        spanLike.setAttribute('aria-label', 'likes')
        spanLike.setAttribute('tabindex', index)
        spanNumber.setAttribute('class', 'span-number') // Class added for select the element with JavaScript on photographer.js

        spanText.textContent = title
        spanNumber.textContent = likes

        // Associated icon functions for each icon DOM element
        spanLike.addEventListener('click', () => {
            iconAddLike(spanNumber)
        })

        spanLike.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                iconAddLike(spanNumber)
            }
        })

        // Media is a video
        if (image === undefined) {
            const videoElt = document.createElement('video')
            const sourceMP4 = document.createElement('source')

            videoElt.setAttribute('class', 'media-container__figure__video cursor-pointer')
            videoElt.setAttribute('alt', 'Lilac breasted roller, closeup view')
            videoElt.setAttribute('id', 'video_id')
            videoElt.setAttribute('tabindex', index)
            videoElt.controls = false
            sourceMP4.source = 'video/mp4'
            sourceMP4.src = folderPath + video

            figure.appendChild(videoElt)
            videoElt.appendChild(sourceMP4)

            // Associated lightbox functions for each video DOM element
            videoElt.addEventListener('click', () => {
                openLightbox(image, video, title, id)
                closeLightbox()
                switchMediaLightxbox(id, allMediasId, mediaImage, mediaVideo, mediaTitle)
            })

            videoElt.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    openLightbox(image, video, title, id)
                    closeLightbox()
                    switchMediaLightxbox(id, allMediasId, mediaImage, mediaVideo, mediaTitle)
                }
            })
        } else { // Media is a image
            img.setAttribute('src', folderPath + image)
            img.setAttribute('class', 'media-container__figure__image cursor-pointer')
            img.setAttribute('alt', 'Lilac breasted roller, closeup view')
            img.setAttribute('tabindex', index)

            figure.appendChild(img)

            // Associated lightbox functions for each img DOM element
            img.addEventListener('click', () => {
                openLightbox(image, video, title, id)
                closeLightbox()
                switchMediaLightxbox(id, allMediasId, mediaImage, mediaVideo, mediaTitle)
            })

            img.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    openLightbox(image, video, title, id)
                    closeLightbox()
                    switchMediaLightxbox(id, allMediasId, mediaImage, mediaVideo, mediaTitle)
                }
            })
        }

        figure.appendChild(figcaption)
        figcaption.appendChild(spanText)
        figcaption.appendChild(spanContainer)
        spanContainer.appendChild(spanNumber)
        spanContainer.appendChild(spanLike)

        return figure
    }

    return { getUserMediaDOM }
}
