function init() {
    date();
    setInterval(clock, 1000);
}

function clock() {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const meridiem = document.getElementById('meridiem');


    const date = new Date();

    let hours = date.getHours().toString().padStart(2,0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);

    if(hours >= 12) {
        meridiem.innerText = 'PM';
        hours -= 12;
    } else {
        meridiem.innerText = 'AM';
    }

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
}

function date() {
    const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December'];

    const dateData = document.getElementById('date-data');

    const dateInfo = new Date();

    const day = dayArr[dateInfo.getDay()];
    const date = dateInfo.getDate().toString().padStart(2,0);
    const month = monthArr[dateInfo.getMonth()];
    const year = dateInfo.getFullYear();

    dateData.innerText = `${day}, ${date} ${month} ${year}`;
}


init();