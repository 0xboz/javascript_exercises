// Q5 JavaScript
const animated_string = (id) => {
    const element = document.getElementById(id);
    let elementText = element.textContent;

    setInterval(() => {
        elementText = elementText.slice(elementText.length - 1) + elementText.slice(0, elementText.length - 1);
        element.innerHTML = elementText;
    }, 200);

};

animated_string('q5')
