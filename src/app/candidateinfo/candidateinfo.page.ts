import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ServerConfig } from '../server.config';
@Component({
  selector: 'app-candidateinfo',
  templateUrl: './candidateinfo.page.html',
  styleUrls: ['./candidateinfo.page.scss'],
})
export class CandidateinfoPage implements OnInit {

  public candidate_id: any;
  public candidate_info: any;
  public criterias: any;
  public crit = [{}];

  constructor(
    private routes: ActivatedRoute,
    private authServ: AuthService,
    private http : HttpClient,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    console.log(this.routes.snapshot.paramMap.get('id'));
    this.candidate_id = this.routes.snapshot.paramMap.get('id');

    this.authServ.getCandidateInfoWithCriteria(this.candidate_id ).subscribe(response => {
      console.log(response);
      this.criterias = response['criterias'];
      this.candidate_info = response['candidate_info'];
      
    });

  }

  clickSubmitScore(){
    var token = JSON.parse(localStorage.getItem("token"));
    //console.log(JSON.stringify(this.crit));

    let raw = JSON.stringify(this.crit);
    var atay = JSON.parse(raw);
   // console.log(atay);

    var morls = [];

    for(var i = 0; i < atay.length; i++){
      var obj = atay[i];
      if(i > 0){
        let tae = {
          criteria_id:  i,
          score: obj,
          sub_event_id : this.candidate_info.subevent[0].id

        };
        morls.push(tae);
      }
    }
    console.log(morls);

    var o = 0;
    var measure = morls.length;
    morls.forEach(element => {
     
      return this.http.post(`${ServerConfig.API}/candidate_score?token=`+token,element).subscribe(
        response => {
          console.log(response['status']);
          o = o + 1;
        console.log(o);
        if(o == measure){
          if(response['status'] == 200){
            this.presentAlert();
          }
        }
        }
      );
     
      
    });
    console.log(measure);

    

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!!!',
      message: 'Candidate Score has been saved',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl('/candidate/'+this.candidate_info.subevent[0].id)
          }
        }
      ]
    });

    await alert.present();
  }


}
