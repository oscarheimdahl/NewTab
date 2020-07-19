const clock = document.getElementById('clock');
let stop = false;
let dirToggle = false;
document.addEventListener('keydown', () => (stop = !stop));

(function init() {
  setTimeout(() => (clock.style.opacity = 1), 200);
  updateClock();
  setInterval(updateClock, 1000);
})();

function updateClock() {
  const time = formattedCurrentTime();
  clock.innerHTML = `${time.h}:${time.m}:${time.s}`;
  if (!stop) move(time.s);
}

function formattedCurrentTime() {
  const now = new Date();
  const h = shift0(now.getHours());
  const m = shift0(now.getMinutes());
  const s = shift0(now.getSeconds());
  return { h, m, s };
}

function shift0(digit) {
  if (digit < 10) digit = '0' + digit;
  return digit;
}

function move(seconds) {
  const maxTop = window.innerHeight - 300;
  const mappedTop = (seconds / 60) * maxTop;
  if (dirToggle) clock.style.top = mappedTop + 'px';
  else clock.style.top = maxTop - mappedTop + 'px';

  if (seconds == 59) dirToggle = !dirToggle;
}
