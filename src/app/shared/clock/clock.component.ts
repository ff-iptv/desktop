import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  public time: string;

  constructor() { }

  ngOnInit() {
    this.currentDate();
  }

  private currentDate(): void {
    this.time = new Date().toLocaleString();
    setTimeout(() => {
      this.currentDate();
    }, 1000);
  }

}
