// Menu Search
const navSearch = document.querySelector('#navSearch');
const qList = document.querySelectorAll('h6');

navSearch.addEventListener('keyup', navSearchResults);

function navSearchResults(e) {
    const keyword = e.target.value;
    console.log(e.target.value);
    console.log(e.target);
    console.log(e);
    Array.from(qList).forEach((item) => {
        const questionStr = item.innerText.toLowerCase();
        if (keyword == '' || keyword == ' ' || keyword == null) {
            item.parentElement.style.display = '';
        }

        if (questionStr.indexOf(keyword) == -1) {
            // console.log(questionStr);
            item.parentElement.style.display = 'none';
        };

    });

};

// Back to Top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});

// Q & A
// Q1
const getDay = () => {
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return dayArray[today.getDay()];
};
const getTime = () => {
    const today = new Date();
    const currentTimeString = today.toLocaleTimeString();
    const currentTimeArray = currentTimeString.split(' ');
    const timeArray = currentTimeArray[0].split(':');
    const hours = timeArray[0];
    const minutes = timeArray[1];
    const seconds = timeArray[2];
    const periods = currentTimeArray[1];
    return `${hours} ${periods} : ${minutes} : ${seconds}`
};
const q1_element = document.getElementById('q1');
q1_element.innerHTML = `Today is: ${getDay()}. <br>Current time is: ${getTime()}`;

// Q2
function print_current_window() {
    window.print();
};

// Q3
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
};
getCurrentDate('q3');

// Q4
const findArea = (id) => {
    const a = 5;
    const b = 6;
    const c = 7;

    const s = (a + b + c) / 2;
    const A = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.getElementById(id).innerHTML = `The area of a triangle where lengths of the three of its sides are ${a}, ${b}, and ${c} equals to ${A}.`;
};
findArea('q4');

// Q5
const animated_string = (id) => {
    const element = document.getElementById(id);
    let elementText = element.textContent;

    setInterval(() => {
        elementText = elementText.slice(elementText.length - 1) + elementText.slice(0, elementText.length - 1);
        element.innerHTML = elementText;
    }, 200);

};
animated_string('q5');

// Q6
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

// Q7
const q7_isSunday = () => {
    const yearFrom = document.querySelector('#q7_year_from').value;
    const yearTo = document.querySelector('#q7_year_to').value;
    const warning = document.querySelector('#q7_warning');
    const result = document.querySelector('#q7_result');
    if (isNaN(yearFrom) || isNaN(yearTo)) {
        warning.style.display = '';
        result.style.display = 'none';
    } else {
        warning.style.display = 'none';
        const result_ul = document.createElement('ul');
        result.appendChild(result_ul);
        for (let year = yearFrom; year <= yearTo; year++) {
            const checkDate = new Date(year, 0, 1);
            if (!checkDate.getDay()) {
                const msg = document.createElement('li');
                msg.innerHTML = `January 1st, ${year} is a Sunday.`;
                result_ul.appendChild(msg);
            };
            result.style.display = '';
        }
    }
};

// Q8
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

// Q9
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

// Q10
let q10Num1;
let q10Num2;
const q10Result = document.querySelector('#q10_result');
const q10Warning = document.querySelector('#q10_warning');

const divideBtnElement = document.querySelector('#q10_divide');
const multipleBtnElement = document.querySelector('#q10_multiply');

const q10GetNum = () => {
    q10Num1 = document.querySelector('#q10_num1').value;
    q10Num2 = document.querySelector('#q10_num2').value;
    if (q10Num1 == '' || q10Num2 == '') {
        divideBtnElement.classList.add('disabled');
        multipleBtnElement.classList.add('disabled');
    } else if (q10Num2 == 0) {
        divideBtnElement.classList.add('disabled');
        multipleBtnElement.classList.remove('disabled');
    } else if (q10Num1 != '' && q10Num2 != '') {
        divideBtnElement.classList.remove('disabled');
        multipleBtnElement.classList.remove('disabled');
    }
};

const q10Multiply = () => {
    if (!multipleBtnElement.classList.contains('disabled')) {
        q10Result.innerHTML = `${q10Num1} x ${q10Num2} = ${q10Num1 * q10Num2}`;
        q10Result.style.display = '';
    }
}

const q10Divide = () => {
    if (!divideBtnElement.classList.contains('disabled')) {
        q10Result.innerHTML = `${q10Num1} &divide; ${q10Num2} = ${q10Num1 / q10Num2}`;
        q10Result.style.display = '';
    }
}

document.querySelector('#q10_num1').addEventListener('blur', q10GetNum);
document.querySelector('#q10_num2').addEventListener('blur', q10GetNum);

divideBtnElement.addEventListener('click', q10Divide);
multipleBtnElement.addEventListener('click', q10Multiply);

// Q11
const q11C = document.querySelector('#q11_c');
const q11F = document.querySelector('#q11_f');
const q11ToCBtn = document.querySelector('#q11_toC');
const q11ToFBtn = document.querySelector('#q11_toF');
const q11Result = document.querySelector('#q11_result');

function q11GetDeg() {
    if (q11C.value != '') {
        q11ToFBtn.classList.remove('disabled');
    }
    if (q11F.value != '') {
        q11ToCBtn.classList.remove('disabled');
    };
}

function q11ToC() {
    if (!q11ToCBtn.classList.contains('disabled')) {
        q11ResultC = (q11F.value - 32) / 9 * 5;
        q11Result.innerHTML = `${q11F.value}&deg;F is ${q11ResultC} &deg;C.`;
        q11Result.style.display = '';
    }
};

function q11ToF() {
    if (!q11ToFBtn.classList.contains('disabled')) {
        q11ResultF = q11C.value / 5 * 9 + 32;
        q11Result.innerHTML = `${q11C.value}&deg;C is ${q11ResultF} &deg;F.`;
        q11Result.style.display = '';
    }
};

q11C.addEventListener('mouseleave', q11GetDeg);
q11F.addEventListener('mouseleave', q11GetDeg);

q11ToCBtn.addEventListener('click', q11ToC);
q11ToFBtn.addEventListener('click', q11ToF);
