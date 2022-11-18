/* Usando programação assíncrona, crie uma webpage que
realize um timer ou cronometro. */

let sec = 0;
let min = 0;
let hour = 0;
let interval;

function twoDigits(n) {
    return (n <= 9 ? "0" + n : n);
}

function start() {
    timer();
    interval = setInterval(timer, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
}



function timer() {
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min==60){
            min = 0;
            hour++;
        }
    }
    document.getElementById('timer').innerHTML = twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec);
}

