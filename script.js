import { Stopwatch } from "./stopwatch.js";

const counter = document.querySelector(`#counter`);
const startBtn = document.querySelector(`#start-btn`);
const stopBtn = document.querySelector(`#stop-btn`);
const loopBtn = document.querySelector(`#loop-btn`);
const clearBtn = document.querySelector(`#clear-btn`);
const loops = document.querySelector(`#loops`);
const stopwatch = new Stopwatch();
counter.textContent = 0;
let interval;

startBtn.addEventListener(`click`, () => {
  interval = stopwatch.start(counter);
  startBtn.disabled = true;
});
stopBtn.addEventListener(`click`, function () {
  stopwatch.stop(interval);
  startBtn.disabled = false;
});

clearBtn.addEventListener(`click`, function () {
  stopwatch.clear(counter, interval, loops);
  startBtn.disabled = false;
});

loopBtn.addEventListener(`click`, function () {
  stopwatch.loop(counter, loops);
});
