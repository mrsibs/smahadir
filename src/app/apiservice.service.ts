import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers };
    const url = 'https://sma.pahang.gov.my/smahadir/' + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }


}
