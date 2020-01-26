import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private authServ: AuthService,
  ) { }

  public messageslist = "male";
  public pre_id : any;
  public data: any;

  ionViewWillEnter(){
    console.log(this.routes.snapshot.paramMap.get('id'));
    this.pre_id = this.routes.snapshot.paramMap.get('id');

    this.authServ.getCandidateCriteria(this.pre_id ).subscribe(response => {
       console.log(response);
       this.data = response;
     });

  }


  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  clickBack(){
    this.router.navigateByUrl('/pevent');
  }

  clickCandidate(id){
    this.router.navigateByUrl('/candidateinfo/'+id);
  }

}
