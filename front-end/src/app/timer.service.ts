import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private countdownSeconds = 15 * 24 * 60 * 60; // 15 days in seconds
  private timerSubject = new BehaviorSubject<{ days: number, hours: number, minutes: number, seconds: number }>({ days: 15, hours: 0, minutes: 0, seconds: 0 });

  constructor() {}

  startTimer() {
    interval(1000).pipe(
      map(() => {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds--;
        }
        const days = Math.floor(this.countdownSeconds / (24 * 60 * 60));
        const hours = Math.floor((this.countdownSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((this.countdownSeconds % 3600) / 60);
        const seconds = this.countdownSeconds % 60;
        return { days, hours, minutes, seconds };
      }),
      takeWhile(() => this.countdownSeconds > 0)
    ).subscribe(time => this.timerSubject.next(time));
  }

  getTimer() {
    return this.timerSubject.asObservable();
  }
}