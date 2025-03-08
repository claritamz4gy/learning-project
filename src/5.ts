import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://api.example.com');
  }
}