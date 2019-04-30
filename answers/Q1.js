// Q1 JavaScript
const getDay = () => {
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return dayArray[today.getDay()];
}

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
}

const q1_element = document.getElementById('q1');
q1_element.innerHTML = `Today is: ${getDay()}. <br>Current time is: ${getTime()}`;

