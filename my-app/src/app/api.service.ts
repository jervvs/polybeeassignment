import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
const apiKey: string = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCurrentWeather(location: string){
    return this.http.get(`${environment.apiUrl}/weather?q=${location}&appid=${apiKey}`)
  }
}
