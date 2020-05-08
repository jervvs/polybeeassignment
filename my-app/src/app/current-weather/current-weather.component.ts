import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

  getUrl(){
    let weathericon = this.weatherData.weather[0].icon;
    let backgroundURL = '../assets/img/' + weathericon + '.png';
    console.log(weathericon);
    return "url(" + backgroundURL+ ")";
  }



}
