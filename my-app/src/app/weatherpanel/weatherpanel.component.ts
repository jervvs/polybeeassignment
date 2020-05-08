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
  editMode = true;

  //add formBuilder to cosntructor to create an instance of a FormBuilder to use in the component
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm =  this.formBuilder.group({
      location: ['']
    });
    this.weatherSearchForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  sendToAPI(formValues){
    this.apiService.getCurrentWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData), err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          return;
        }
        alert('Failed to get weather.');
      }
    });

    this.editMode = false;
  }

  edit(){
    this.editMode=true;
  }

  getUrl(){
    let weathericon = this.weatherData.weather[0].icon;
    let backgroundURL = '../assets/img/' + weathericon + '.png';
    return "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + backgroundURL+ ")";
  }
}
