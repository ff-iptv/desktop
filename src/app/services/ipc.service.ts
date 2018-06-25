import { Injectable } from '@angular/core';

import { IpcRenderer } from 'electron';

@Injectable()
export class IpcService {

  private ipcRenderer: IpcRenderer | undefined;

  constructor() {
    if (window.require) {
      try {
        this.ipcRenderer = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  public on(channel: string, listener: Function): void {
    if (!this.ipcRenderer) {
      return;
    }
    this.ipcRenderer.on(channel, listener);
  }

  public send(channel: string, ...args): void {
    if (!this.ipcRenderer) {
      return;
    }
    this.ipcRenderer.send(channel, ...args);
  }  

}
