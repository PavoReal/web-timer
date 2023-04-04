const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const timerDisplay = document.getElementById('timerDisplay');
const resetBtn = document.getElementById('resetBtn');
let timer;
let isPaused = false;

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
    isPaused = false;

    clearInterval(timer);
    updateTimerDisplay(time);

    timer = setInterval(() => {
        if (!isPaused) {
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
        }
    }, 1000);
});

pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Unpause' : 'Pause';
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    document.body.style.backgroundColor = "";
    updateTimerDisplay(0);
    isPaused = false;
    pauseBtn.textContent = 'Pause';
});
