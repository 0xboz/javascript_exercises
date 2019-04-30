// Q11 JavaScript
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
