import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styleUrls: ["./countdown-timer.component.scss"]
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = "";
  seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `T-${this.seconds} seconds and counting`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = "Blast off!";
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

  constructor() {}

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }
}
