function iconAddLike (spanNumber) {
    const likeContainer = document.getElementById('like')
    let totalLike = parseInt(likeContainer.textContent)
    let totalLikeMedia = parseInt(spanNumber.textContent)

    // Add like to total like container
    totalLike++
    // Add like to specific media
    totalLikeMedia++

    // Change the content
    likeContainer.textContent = totalLike
    spanNumber.textContent = totalLikeMedia
}
