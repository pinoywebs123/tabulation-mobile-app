import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pevent',
  templateUrl: './pevent.page.html',
  styleUrls: ['./pevent.page.scss'],
})
export class PeventPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  clickPreEvent(){
    this.router.navigateByUrl('/candidate')
  }

  clickBack(){
    this.router.navigateByUrl('/home');
  }

}
