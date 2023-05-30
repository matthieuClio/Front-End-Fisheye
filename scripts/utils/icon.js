function iconAddLike() {
    const likeContainer = document.getElementById("like");
    let totalLike = parseInt(likeContainer.textContent);

    totalLike++;
    likeContainer.textContent = totalLike;
}