import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  startForm = true;
  constructor() { }
  ngOnInit(): void {

  }

  formStart(){
    this.startForm = true;
  }


}
