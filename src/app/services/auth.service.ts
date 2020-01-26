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
    //192.168.5.11
    return this.http.get('http://192.168.254.100/web_tabulation/api/morley');
   
  }

  getEvents(){
    return this.http.get('http://192.168.254.100/web_tabulation/api/getEvents');
  }

  getPreEvents(event_id){
    return this.http.get('http://192.168.254.100/web_tabulation/api/getPreEvents/'+event_id);
  }

  getCandidateCriteria(pre_event_id){
    return this.http.get('http://192.168.254.100/web_tabulation/api/candidate_criteria/'+pre_event_id);
  }
}
