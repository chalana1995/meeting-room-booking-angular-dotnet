import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  constructor(private http: HttpClient) {}

  getAllPackages() {
    return this.http.get(
      'http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages'
    );
  }
}
