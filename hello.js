let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById('display');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let ms = Math.floor((diffInSec - ss) * 100);

    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerHTML = timeToString(elapsedTime);
    }, 100);
});

document.getElementById('pauseBtn').addEventListener('click', () => clearInterval(timerInterval));

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
    document.getElementById('laps').innerHTML = "";
});

document.getElementById('lapBtn').addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = display.innerHTML;
    document.getElementById('laps').appendChild(li);
});