import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicTableComponent } from './shared/components/dynamic-table/dynamic-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, DynamicTableComponent],
  entryComponents: [DynamicTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
