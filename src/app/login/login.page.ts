import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private authServ: AuthService,
    private http: HttpClient,
    public alertController: AlertController,
  ) { }
   
  public morley = " Server Not Detected";
  public email = '';
  public password = '';
  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.authServ.getTest().subscribe(response => {
     
      this.morley = response['status'];
      console.log(this.morley);
    });
  }

  clickLogin(){
    

    return this.authServ.getLogin(this.email, this.password).subscribe(response => {
      console.log(response);
      if(response['status'] == 200){
          localStorage.setItem("token", JSON.stringify(response['access_token']));

          this.router.navigateByUrl('/home');

        }
    }, error => {
      console.log(error);
      if(error['status'] == 401){
        this.presentAlert();
      }
    })
    //
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Invalid Email/Password Combination.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }

}
