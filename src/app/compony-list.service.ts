import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponyListService {
 url = "http://localhost:9898/company"
  constructor(private http : HttpClient) { }
  getcompany()
  {
    return this.http.get(this.url);
  }
}
