import { Router, ActivatedRoute } from '@angular/router';
import { Answer } from './model/Answers';
import { AuthService } from './../auth.service';
import { Questions } from './model/questions';

import { DataService } from './../data.service';
import {StorageService} from './../storage.service';
import { Component, Output } from '@angular/core';

import 'hammerjs';
import { ToastController } from '@ionic/angular';
import { Mobilenum } from './model/Mobilenum';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public questionData: Questions[];
    public userAnswer: string;
     answer: Answer[];
     answerdata: any = [];
     answerall: any = {};
     mob: number;
     monbarray: Mobilenum[];
  constructor(
      private dataservice: DataService,
      private toast: ToastController,
      public authService: AuthService,
      public storageService: StorageService,
      private acivatedRoute: ActivatedRoute) {
      console.log('consturcor called..');
      this.getingData();
  }
  Click() {
    console.log('click hua');
  }
  reloadedData() {
 this.acivatedRoute.params.subscribe(Params => {
  this.questionData = Params['questionData'];
  this.storageService.setObject('QA_MASTER', this.questionData);
  console.log(this.questionData);
});
  }
  getingData() {
    this.storageService.getObject('QA_MASTER').then(result => {
      if (result !== null) {
        this.questionData = result;
          // tslint:disable-next-line: align
      } else if (result === null ) {
          this.dataservice.getData().subscribe(data => {
          this.questionData = data;
          console.log(this.questionData);
          console.log('Saving Data into local storage...');
          this.storageService.setObject('QA_MASTER', this.questionData);
          console.log(this.questionData);
        });
      } else {
        console.log('QA_MASTER Loaded from local store');
      }
      }).catch(e => {
        this.questionData = null;
        console.log('error: ', e);
      });
}
collectingAnswer() {
}

onSave(qIndexId) {
  console.log(qIndexId);
  console.log(this.userAnswer);
  const ans = new Answer(this.questionData[qIndexId].id, this.userAnswer);

  this.mob = 123456;
  const mobi = new Mobilenum(this.mob);
  // this.answerdata.push(ans);
  this.answerdata.push(ans);
  console.log( JSON.stringify( this.answerdata));
  if (this.questionData[qIndexId].answer === this.userAnswer) {

    console.log('Appka Zabaab Sahi Hai');
    this.correctAnser();
  } else {
    console.log('Kabhi Padh Liya Karo');
    this.incorrectAnswer();
  }
}

swipeEvent(e) {
  console.log('Swap kiya gaya..');
  this.userAnswer = null;
}
onSubmit() {
   this.dataservice.postData(JSON.stringify(this.answerdata)).subscribe(data => {
    console.log(data );
  }, err => {
    console.log(err.message);
  });
   console.log(JSON.stringify(this.answerdata));
}


async correctAnser() {
  const toast = await this.toast.create({
    message: 'Correct answer',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Congrats',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  toast.present();
}
async incorrectAnswer() {
  const toast = await this.toast.create({
    message: 'This Answer is incorrect',
    position: 'top',
    buttons: [ {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  toast.present();
}
}
