// Q8 JavaScript
const q8_guessNum = () => {
    const userNum = document.querySelector('#q8_userNum').value;
    const warning = document.querySelector('#q8_warning');
    const result = document.querySelector('#q8_result');
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    if (isNaN(userNum) || userNum == '') {
        warning.style.display = '';
        result.style.display = 'none';
    } else if (userNum === String(randomNum)) {
        warning.style.display = 'none';
        result.innerHTML = 'Congrats! You are correct!';
        result.style.display = '';
    } else {
        warning.style.display = 'none';
        result.innerHTML = 'Sorry! Maybe try one more time.';
        result.style.display = '';
    }
};
