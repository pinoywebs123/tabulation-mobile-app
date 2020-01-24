import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) { }

  getTest(){
    return this.http.get('http://192.168.254.100/web_tabulation/public/api/morley');
   
  }
}
