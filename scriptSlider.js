function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split("&");
    for (const query of queries) {
        const pair = query.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

const params = getQueryParams();
const title = params.title || "Título por defecto";
const description = params.description || "Descripción por defecto";

const titleElement = document.querySelector('.title');
titleElement.textContent = `${title} - ${description}`;

const imageContainer = document.querySelector('.image-container');
const folderName = title.toLowerCase();

imageContainer.innerHTML = "";

let imagesToLoad;

switch (title) {
    case "Bares":
        imagesToLoad = 10;
        for (let i = 1; i <= imagesToLoad; i++) {
            const imgElement = document.createElement('div');
            imgElement.classList.add('image');
            imgElement.innerHTML = `<img src="img/slider/${folderName}/${folderName}-${i}.webp" alt="${title} ${i}">`;
            imageContainer.appendChild(imgElement);
        }
        break;
    case "Fotoproductos":
        imagesToLoad = 33;
        for (let i = 1; i <= imagesToLoad; i++) {
            const imgElement = document.createElement('div');
            imgElement.classList.add('image');
            imgElement.innerHTML = `<img src="img/slider/${folderName}/${folderName}-${i}.webp" alt="${title} ${i}">`;
            imageContainer.appendChild(imgElement);
        }
        break;
    case "Sesiones":
        imagesToLoad = 10;
        for (let i = 1; i <= imagesToLoad; i++) {
            const imgElement = document.createElement('div');
            imgElement.classList.add('image');
            imgElement.innerHTML = `<img src="img/slider/${folderName}/${folderName}-${i}.webp" alt="${title} ${i}">`;
            imageContainer.appendChild(imgElement);
        }
        break;
}

//SLIDER
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.popup-image span').forEach(function (span) {
    span.onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    };
});