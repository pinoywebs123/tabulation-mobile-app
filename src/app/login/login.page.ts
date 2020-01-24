import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private authServ: AuthService
  ) { }
   
  public morley = " Server Not Detected";

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.authServ.getTest().subscribe(response => {
     
      this.morley = response['status'];
      console.log(this.morley);
    });
  }

  clickLogin(){
    this.router.navigateByUrl('/home');
  }

}
