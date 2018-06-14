import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  public abbreviation: string = '';
  title = 'app';

  ngOnInit(): void {
    setTimeout(() => {
      this.abbreviation = 'disappear-hidden';
    }, 2000);
  }  
}
