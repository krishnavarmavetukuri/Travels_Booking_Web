import { Component, OnInit } from '@angular/core';

import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  time = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimer().subscribe(time => {
      this.time = time;
    });
    this.timerService.startTimer();
  }
}