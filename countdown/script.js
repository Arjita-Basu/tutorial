const endDate= "1 August 2023";

const daysH = document.getElementById("days");
const hoursH = document.getElementById("hours");
const minsH = document.getElementById("mins");
const secondsH = document.getElementById("seconds");

function countDown()
{
    const endingDate = new Date(endDate);
    const todayDate = new Date();


    const totalSeconds = (endingDate-todayDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24 ;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysH.innerHTML = days;
    hoursH.innerHTML = timeFormat(hours);
    minsH.innerHTML = timeFormat(mins);
    secondsH.innerHTML = timeFormat(seconds);

}

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown,1000);
