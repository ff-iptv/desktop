import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public date: string;
  public month: string;
  public hours: string;
  public minute: string;


  constructor() { }

  ngOnInit() {
    this.currentDate();
  }

  private maskNumber(value: string | number): string {
    return ("0" + value).substr(-2);
  }

  private currentDate(): void {
    let time = new Date();
    this.date = this.maskNumber(time.getDate());
    this.month = this.maskNumber(time.getMonth());
    this.hours = this.maskNumber(time.getHours());
    this.minute = this.maskNumber(time.getMinutes());

    setTimeout(() => {
      this.currentDate();
    }, 1000);
  }

}
