const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minutes');
const secondEle = document.getElementById('seconds');
const ampmEle = document.getElementById('ampm');
const body = document.body;
const greetingEle = document.getElementById('greeting');
const toggleFormatBtn = document.getElementById('toggleFormat');

let is24HourFormat = false;

function updateTime() {
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();
    let ampm = "AM";

    // Set AM/PM based on the hour
    if (h >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Update greeting based on time
    if (h >= 5 && h < 12) {
        greetingEle.innerHTML = "Good Morning!";
    } else if (h >= 12 && h < 17) {
        greetingEle.innerHTML = "Good Afternoon!";
    } else if (h >= 17 && h < 20) {
        greetingEle.innerHTML = "Good Evening!";
    } else {
        greetingEle.innerHTML = "Good Night!";
    }

    if (!is24HourFormat) {
        // 12-hour format logic
        if (h > 12) {
            h = h - 12;
        }
        if (h === 0) {
            h = 12;
        }
    }

    ampmEle.innerHTML = ampm;

    // Add leading zeros
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    hourEle.innerHTML = h;
    minuteEle.innerHTML = m;
    secondEle.innerHTML = s;

    // Background image based on time
    if (dateTime.getHours() >= 5 && dateTime.getHours() < 12) {
        body.style.backgroundImage = "url('morning.jpg')";
    } else if (dateTime.getHours() >= 12 && dateTime.getHours() < 17) {
        body.style.backgroundImage = "url('afternoon.jpg')";
    } else if (dateTime.getHours() >= 17 && dateTime.getHours() < 20) {
        body.style.backgroundImage = "url('evening.jpg')";
    } else {
        body.style.backgroundImage = "url('night.jpg')";
    }
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    if (is24HourFormat) {
        toggleFormatBtn.innerHTML = "Switch to 12-Hour Format";
    } else {
        toggleFormatBtn.innerHTML = "Switch to 24-Hour Format";
    }
    updateTime(); // Update time immediately after switching format
}

toggleFormatBtn.addEventListener('click', toggleFormat);

setInterval(updateTime, 1000);
