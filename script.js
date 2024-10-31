const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minutes');
const secondEle = document.getElementById('seconds');
const ampmEle = document.getElementById('ampm');
const body = document.body;

function updateTime() {
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();
    

    // Add AM/PM indicator
    if(h >= 12){
        ampmEle.innerHTML = "PM";
    }else{
        ampmEle.innerHTML = "AM";
    }


    // Adjust hour for 12-hour format
    if(h >= 12){
        h = h - 12;
    }else if (h === 0) {
        h = 12;
    }



    // Add leading zeros using if statements
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

   

}

setInterval(updateTime, 1000);