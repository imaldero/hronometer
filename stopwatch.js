export class Stopwatch {
  timer = 0;

  start(counter) {
    const interval = setInterval(() => {
      this.timer++;
      counter.innerHTML = this.colors(this.timer);
    }, 1000);
    return interval;
  }
  colors(timer) {
    let timerString = timer.toString();
    let timerSplit = timerString.split("");
    let color = timerSplit.map((x) => {
      return `<span class="_${x}">${x}</span>`;
    });
    return color.toString().replaceAll(",", "");
  }
  stop(interval) {
    clearInterval(interval);
  }
  loop(counter, loops) {
    loops.insertAdjacentHTML(
      `afterbegin`,
      `<li>${this.colors(this.timer, counter)}</li><br>`
    );
    this.timer = counter.textContent = 0;
  }
  clear(counter, interval, loops) {
    this.stop(interval);
    this.timer = 0;
    counter.textContent = 0;
    loops.textContent = ``;
  }
}
