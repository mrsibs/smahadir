import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiservice: ApiserviceService,
    private storageService: StorageService
  ) { }

  login(postData: any): Observable<any> {
    return this.apiservice.post('loginAPI.php',postData);
  }
}
