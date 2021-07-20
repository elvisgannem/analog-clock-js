let rotate = 6;
let hour = document.querySelector('#hours__div');
let minute = document.querySelector('#minutes__div');
let second = document.querySelector('#seconds__div');
let tHours = document.querySelector('#t-hours');
let tMinutes = document.querySelector('#t-minutes');
let tSeconds = document.querySelector('#t-seconds');

// metodo que faz o relogio se mover
// method that makes the clock move
setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * rotate;
    let seconds = day.getSeconds() * rotate;

    hour.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`;

    minute.style.transform = `rotateZ(${minutes}deg)`;

    second.style.transform = `rotateZ(${seconds}deg)`;
})

// metodo que atualiza o horario em tempo real
// method that updates the date in real time
setInterval(() => {
    let day = new Date();
    let hours = day.getHours().toString();
    let minutes = day.getMinutes().toString();
    let seconds = day.getSeconds().toString();

    //se segundos, minutos ou hora < de 2 digitos, coloca um 0 no começo da string.
    // if seconds, minutes or hour < 2 digits, puts a 0 at the beginning of the string.
    if(seconds.length < 2){
        seconds = seconds.padStart(2, '0');
    }

    if(minutes.length < 2){
        minutes = minutes.padStart(2, '0');
    }

    if(hours.length < 2){
        hours = hours.padStart(2, '0');
    }

    tHours.innerHTML = hours;
    tMinutes.innerHTML = minutes;
    tSeconds.innerHTML = seconds;

})