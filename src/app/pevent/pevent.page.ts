import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pevent',
  templateUrl: './pevent.page.html',
  styleUrls: ['./pevent.page.scss'],
})
export class PeventPage implements OnInit {

  public event_id : any;
  public data: any;
  constructor(
    private router: Router,
    private authServ: AuthService,
    private routes: ActivatedRoute
  ) { }

  ionViewWillEnter(){
    console.log(this.routes.snapshot.paramMap.get('id'));
    this.event_id = this.routes.snapshot.paramMap.get('id');

    this.authServ.getPreEvents(this.event_id ).subscribe(response => {
      
       console.log(response);
       this.data = response;
     });

  }

  ngOnInit() {
  }

  clickPreEvent(pre_id){
    this.router.navigateByUrl('/candidate/'+pre_id)
  }

  clickBack(){
    this.router.navigateByUrl('/home');
  }

}
