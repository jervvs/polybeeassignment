import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-weatherpanel',
  templateUrl: './weatherpanel.component.html',
  styleUrls: ['./weatherpanel.component.css']
})
export class WeatherpanelComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  //add formBuilder to cosntructor to create an instance of a FormBuilder to use in the component
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm =  this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPI(formValues){
    this.apiService.getCurrentWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
