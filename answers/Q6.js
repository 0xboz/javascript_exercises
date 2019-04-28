// Q6 JavaScript

const q6_checkLeapYear = () => {
    const year = document.getElementById('leap_year').value;
    const warning = document.querySelector('#q6_warning');
    const result = document.querySelector('#q6_result');
    if (isNaN(year)) {
        warning.style.display = '';
        result.style.display = 'none';
    } else if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        warning.style.display = 'none';
        result.style.display = '';
        result.innerHTML = `${year} is a leap year.`;
    } else {
        warning.style.display = 'none';
        result.style.display = '';
        result.innerHTML = `${year} is a common year.`;
    }
};
