function getQueryParams(){
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

document.querySelector('.title').textContent = `${title} - ${description}`;

//SLIDER
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.popup-image span').forEach(function(span) {
    span.onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    };
});