import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxImageComponent } from './shared/box-image/box-image.component';
import { ClockComponent } from './shared/clock/clock.component';
import { LegendComponent } from './shared/legend/legend.component';
import { IpcService } from './services/ipc.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxImageComponent,
    ClockComponent,
    LegendComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [IpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
