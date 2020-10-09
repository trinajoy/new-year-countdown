const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  /* 
   divide by 1000 to get seconds (seconds to days)
   divide by 60 to get minutes (minutes to days)
   divide by 60 to get hours (hours to days)
   divide by 24 to get days (24 hours in a day)
  */

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  /* 
   add values to DOM
   if value less than 10, put a 0 infront

   ternary operator - short hand (if else) statement 
   
    h < 10 ? "0" + h : h;   
   
      if = ?
      else = : 

      if( h < 10) {
      display '0'

      } else {
        display '10'
      }

  */

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// show spinner before showing countdown numbers
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// will run every second
setInterval(updateCountdown, 1000); // 1000 milliseconds is 1 sec
