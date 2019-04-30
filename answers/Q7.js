// Q7 JavaScript
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
