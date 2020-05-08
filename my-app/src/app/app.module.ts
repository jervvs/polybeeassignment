import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "./api.service";
import { HeaderComponent } from './components/header/header.component';
import { WeatherpanelComponent } from './weatherpanel/weatherpanel.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { AnchorDirectiveDirective } from './anchor-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    WeatherpanelComponent,
    CurrentWeatherComponent,
    AnchorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
