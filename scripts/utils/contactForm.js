function displayModal() {
    const modal = document.getElementById("contact_modal");
    const openElement = document.getElementById("open");

    // Open modal
    openElement.addEventListener("click", () => {
        modal.style.display = "block";
    });
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const closeElement = document.getElementById("close");

    // Close modal
    closeElement.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function sendData() {
    const contactForm = document.getElementById("contactForm");
    const firstNameElt = document.getElementById("inputFirstName");
    const nameElt = document.getElementById("inputName");
    const emailElt = document.getElementById("inputEmail");
    const messageElt = document.getElementById("inputMessage");

    contactForm.addEventListener("submit", (evenement) => {
        evenement.preventDefault();

        console.log(firstNameElt.value);
        console.log(nameElt.value);
        console.log(emailElt.value);
        console.log(messageElt.value);
    });
}