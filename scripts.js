const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timerDisplay');
const resetBtn = document.getElementById('resetBtn');
let timer;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimerDisplay(time) {
    timerDisplay.textContent = formatTime(time);
}

function flashBackgroundColor(duration) {
    document.body.style.backgroundColor = "green";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, duration);
}

startBtn.addEventListener('click', () => {
    let time = 10 * 60 * 1000; // 10 minutes in milliseconds

    clearInterval(timer);
    updateTimerDisplay(time);

    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            updateTimerDisplay(0);
            flashBackgroundColor(5000);
        } else {
            time -= 1000;
            updateTimerDisplay(time);
            if (time % (60 * 1000) === 0) {
                flashBackgroundColor(2000);
            }
        }
    }, 1000);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "";
    updateTimerDisplay(0);
});
