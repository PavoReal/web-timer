const timerInput = document.getElementById('timerInput');
const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timerDisplay');
let timer;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = milliseconds % 1000;
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}

function updateTimerDisplay(time) {
    timerDisplay.textContent = formatTime(time);
}

startBtn.addEventListener('click', () => {
    let time = parseInt(timerInput.value, 10) * 1000;

    if (isNaN(time) || time < 1) {
        alert('Please enter a valid time in seconds.');
        return;
    }

    clearInterval(timer);
    updateTimerDisplay(time);
    
    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            updateTimerDisplay(0);
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(1000);
            }
        } else {
            time -= 10;
            updateTimerDisplay(time);
        }
    }, 10);
});
