import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map/map.component';
import { SearchComponent } from './search/search/search.component';
import { ListComponent } from './list/list/list.component';
import { ListElementComponent } from './list/list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    ListComponent,
    ListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
