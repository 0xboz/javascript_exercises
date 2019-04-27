// Q4 JavaScript
const findArea = (id) => {
    const a = 5;
    const b = 6;
    const c = 7;

    const s = (a + b + c) / 2;
    const A = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.getElementById(id).innerHTML = `The area of a triangle where lengths of the three of its sides are ${a}, ${b}, and ${c} equals to ${A}.`;
};

findArea('q4');
