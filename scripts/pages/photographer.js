//Mettre le code JavaScript lié à la page photographer.html

// Get id photographer url
async function getUserId() {
    let paramUrl = window.location.search;
    paramUrl = paramUrl.substring(1);

    return ({ paramUrl });
}

// Get photographers datas
async function getPhotographers(id) {

    // Get api data
    const response = await fetch('./data/photographers.json');
    const apiInternal = await response.json(); // response contain photographers and media object
    const photographers = apiInternal.photographers; // apiInternal.photographers reference to photographers object
    console.log('Test API'); // Test API
    console.log(apiInternal); // Test API

    // Get specific data of photographer
    let count = 0;
    let maxData = photographers.length;
    let findPhotographer = false;
    const idUser = id;
    // console.log (idUser);
    // let test = photographers[0];
    // console.log(photographers[0].id);
    // console.log(maxData);

    
    while(count < maxData && !findPhotographer) {

        console.log('ok');
        if(photographers[count].id == idUser) {
            const data = photographers[count];
            findPhotographer = true;

            console.log(data);
            console.log(findPhotographer);
        }
        count++;
    }

    // console.log(data)

    return ({ photographers })
}

async function displayInformations() {
}

// Main function
async function init() {

    // Get id user
    const urlId = await getUserId();
    const idUser = urlId.paramUrl; 
    // console.log(idUser);

    // Get photographe data
    const photographerDatas = getPhotographers(idUser);

    // Display photographers personal informations
    // displayInformations();
};

init();