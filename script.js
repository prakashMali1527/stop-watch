'use strict';
var startButton = document.getElementById("start");

var pauseButton = document.getElementById("pause");

var resetButton = document.getElementById("reset");

let timerTime = document.querySelectorAll('#timer-display-time #time span');

(function () {
    let minutes = 0, seconds = 0, centiSeconds = 0;
    let state = "";

    startButton.addEventListener('click', () => {
        if (state != "start") {
            state = "start";
            let stopClock = setInterval(() => {
                if (state == "pause" || state == "reset"){
                    clearInterval(stopClock);
                }
                else {
                    centiSeconds++;
                    if (centiSeconds == 100) {
                        centiSeconds = 0;
                        seconds++;
                        if (seconds == 60) {
                            seconds = 0;
                            minutes++;
                        }
                    }
                }
                showTime();
            }, 10);
        }
    })

    pauseButton.addEventListener('click', () => {
        state = "pause";
        showTime();
    })

    resetButton.addEventListener('click', () => {
        state = "reset";
        minutes = 0;
        seconds = 0;
        centiSeconds = 0;
        showTime();
    })

    function formatTime(eachTime) {

        return (eachTime < 10) ? "0" + eachTime : eachTime;

    }
    function showTime() {
        
        timerTime[0].innerHTML = formatTime(minutes);
        timerTime[1].innerHTML = formatTime(seconds);
        timerTime[2].innerHTML = formatTime(centiSeconds);
    }
})();
