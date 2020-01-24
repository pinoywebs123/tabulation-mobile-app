import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public messageslist = "male";

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
