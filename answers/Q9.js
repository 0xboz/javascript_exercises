//  Q9 JavaScript
const q9Button = document.querySelector('#q9_calculate');
const q9Result = document.querySelector('#q9_result');

const daysLeftToXmas = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    let nextXmas;

    if (month === 11 && date > 25) {
        nextXmas = new Date(`December 25, ${year + 1}`);
    } else {
        nextXmas = new Date(`December 25, ${year}`);
    };
    const daysLeft = Math.floor((Date.parse(nextXmas) - Date.now()) / 86400000)
    q9Result.innerHTML = `${daysLeft} days left until next Christmas.`;
    q9Result.style.display = '';
}

q9Button.addEventListener('click', daysLeftToXmas);
