let timer = document.querySelector(".timer-text");
let thisYear = new Date().getFullYear();
console.log(thisYear);
const newYear = new Date(`January 1, ${thisYear + 1} 00:00:00`).getTime();

let x = setInterval(() => {
  const now = new Date().getTime();
  let diff = newYear - now;
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((diff % (1000 * 60)) / 1000);
  timer.textContent = `In ${day} days, ${hour}:${minute}:${second}`;
}, 1000);
