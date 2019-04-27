// Q3 JavaScript
const getCurrentDate = (id) => {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth()).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const dateFormat1 = `${month}-${date}-${year}`;
    const dateFormat2 = `${month}/${date}/${year}`;
    const dateFormat3 = `${date}-${month}-${year}`;
    const dateFormat4 = `${date}/${month}/${year}`;
    const q3_element = document.getElementById(id);
    q3_element.innerHTML = `${dateFormat1}, ${dateFormat2}, or ${dateFormat3}, ${dateFormat4}`;
}

getCurrentDate('q3');
