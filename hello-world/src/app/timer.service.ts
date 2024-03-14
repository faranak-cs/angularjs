import { Injectable } from '@angular/core';
import { timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;
  timeInterval: any;

  state: boolean = false;

  constructor() {}

  start(): void {
    if (!this.state) {
      this.state = true;
      this.timeInterval = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }
        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
        if (this.min === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      }, 10);
    } else {
      this.stop();
    }
  }

  reset(): void {
    this.state = false;
    this.ms = this.sec = this.min = this.hr = '0' + 0;
  }

  stop(): void {
    clearInterval(this.timeInterval);
    this.state = false;
  }

  getMS(): any {
    return this.ms;
  }
  getSEC(): any {
    return this.sec;
  }
  getMIN(): any {
    return this.min;
  }
  getHR(): any {
    return this.hr;
  }
}
