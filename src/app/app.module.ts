import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxImageComponent } from './shared/box-image/box-image.component';
import { ClockComponent } from './shared/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxImageComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
