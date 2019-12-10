import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MagicApiService {
  API_URI = 'https://api.magicthegathering.io/v1/cards';
  constructor(private http: HttpClient) { }
  getCards() {
    return this.http.get('${this.API_URI}');
  }
}
