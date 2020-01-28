import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServerConfig } from '../server.config';

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
    return this.http.get(`${ServerConfig.API}/morley`);
   
  }

  getLogout(){
    var token = JSON.parse(localStorage.getItem("token"));
    return this.http.get(`${ServerConfig.API}/logout?token=`+token);
  }

  getLogin(email, password){
    return this.http.post(`${ServerConfig.API}/login`, {email: email, password: password});
  }

  getEvents(){
    return this.http.get(`${ServerConfig.API}/getEvents`);
  }

  getPreEvents(event_id){
    return this.http.get(`${ServerConfig.API}/getPreEvents/`+event_id);
  }

  getCandidateCriteria(pre_event_id){
    return this.http.get(`${ServerConfig.API}/candidate_criteria/`+pre_event_id);
  }

  getCandidateInfoWithCriteria(candidate_id){
    return this.http.get(`${ServerConfig.API}/candidate_info/`+candidate_id);
  }

  sendCandidateScore(data){
    
  }
}
