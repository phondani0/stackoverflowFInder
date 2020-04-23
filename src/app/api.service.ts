import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = "https://api.stackexchange.com/2.2";

  constructor (
    public http: HttpClient
  ) { }

  getQuestions(params): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/advanced?site=stackoverflow`, { params })
  }
}
