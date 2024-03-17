const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');
//DOMCONTENTLOADED- JAB HAMARA HTML AND CSS LOAD HO JAYE TAB HAMARA JAVASCRIPT LOAD HO
document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();//current date
    //here we not using const because the time value gets fixed once it is stored

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`;

    timeformat.innerHTML = hr>12 ? "PM" : "AM";
    // console.log("hours" + hr + "mins" + mins + "secs" + secs);

}