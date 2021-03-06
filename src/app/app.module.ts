import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisableModule } from './core/directives/disable/disable.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DisableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
