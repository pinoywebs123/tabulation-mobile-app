import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data: any;
  constructor(
    private router: Router,
    private authServ: AuthService
  ) {}

  ionViewWillEnter(){
    this.authServ.getEvents().subscribe(response => {
     this.data = response;
      console.log(this.data);
    });
  }

  clickEvent(event_id){
    this.router.navigateByUrl('/pevent/'+event_id);
  }

}
