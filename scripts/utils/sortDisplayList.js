function sortDisplaylist() {
    const sortByDownIcon = document.getElementById("chevron-down-icon");
    const sortByUpIcon = document.getElementById("chevron-up-icon");
    const sortByDateIcon = document.getElementById("order-by-date");
    const orderByTitle = document.getElementById("order-by-title");

    sortByDownIcon.addEventListener("click", () => {
        sortByDateIcon.classList.remove("display-none");
        orderByTitle.classList.remove("display-none");
        sortByUpIcon.classList.remove("display-none");
        sortByDownIcon.classList.add("display-none");
    });

    sortByUpIcon.addEventListener("click", () => {
        sortByDateIcon.classList.add("display-none");
        sortByUpIcon.classList.add("display-none");
        orderByTitle.classList.add("display-none");
        sortByDownIcon.classList.remove("display-none");
    });
}