function iconAddLike(spanNumber) {
    const likeContainer = document.getElementById("like");
    let totalLike = parseInt(likeContainer.textContent);
    let totalLikeMedia = parseInt(spanNumber.textContent);

    totalLike++;
    totalLikeMedia++;
    likeContainer.textContent = totalLike;
    spanNumber.textContent = totalLikeMedia;
}