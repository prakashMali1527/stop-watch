'use strict';
var startButton = document.getElementById("start");

var pauseButton = document.getElementById("pause");

var resetButton = document.getElementById("reset");

let timerTime = document.querySelector('#timer-display-time span');

(function () {
    let hours = 0, minutes = 0, seconds = 0;
    let state = "";

    startButton.addEventListener('click', () => {
        if (state != "start") {
            state = "start";
            let stopClock = setInterval(() => {
                if (state == "pause" || state == "reset")
                    clearInterval(stopClock);
                else {
                    seconds++;
                    if (seconds == 60) {
                        seconds = 0;
                        minutes++;
                        if (minutes == 60) {
                            minutes = 0;
                            hours++;
                        }
                    }
                }
                showTime();
            }, 1000);
        }
    })

    pauseButton.addEventListener('click', () => {
        state = "pause";
        showTime();
    })

    resetButton.addEventListener('click', () => {
        state = "reset";
        hours = 0;
        minutes = 0;
        seconds = 0;
        showTime();
    })
    function formatTime() {
        let newHours = (hours < 10) ? "0" + hours : hours;
        let newMinutes = (minutes < 10) ? "0" + minutes : minutes;
        let newSeconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${newHours}:${newMinutes}:${newSeconds}`;
    }
    function showTime() {

        timerTime.innerText = formatTime();
    }
})();
