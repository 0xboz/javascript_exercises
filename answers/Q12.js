// Q12 JavaScript
document.querySelector('#q12_getURL').addEventListener('click', q12GetURL);
const result = document.querySelector('#q12_result');
function q12GetURL() {
    const siteURL = document.URL;
    result.innerHTML = siteURL;
    result.style.display = '';
}
