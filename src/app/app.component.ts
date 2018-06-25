import { Component, OnInit } from '@angular/core';
import { IpcService } from './services/ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public abbreviation: string = '';

  constructor(private readonly ipcRenderer: IpcService){
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.abbreviation = 'disappear-hidden';
    }, 2000);
  }  

  public mngWindow(key: string, event: Event): void {
    this.ipcRenderer.send(key);
  }
}
