// Q10 JavaScript
let q10Num1;
let q10Num2;
const result = document.querySelector('#q10_result');
const warning = document.querySelector('#q10_warning');

const divideBtnElement = document.querySelector('#q10_divide');
const multipleBtnElement = document.querySelector('#q10_multiply');

const getNum = () => {
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
        result.innerHTML = `${q10Num1} x ${q10Num2} = ${q10Num1 * q10Num2}`;
        result.style.display = '';
    }
}

const q10Divide = () => {
    if (!divideBtnElement.classList.contains('disabled')) {
        result.innerHTML = `${q10Num1} &divide; ${q10Num2} = ${q10Num1 / q10Num2}`;
        result.style.display = '';
    }
}

document.querySelector('#q10_num1').addEventListener('blur', getNum);
document.querySelector('#q10_num2').addEventListener('blur', getNum);

divideBtnElement.addEventListener('click', q10Divide);
multipleBtnElement.addEventListener('click', q10Multiply);
