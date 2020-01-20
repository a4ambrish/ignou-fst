import { DataService } from './../data.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private tost: ToastController, private dataService: DataService) { }
model: any = {};
  ngOnInit() {
  }
  onLogin(f) {
      console.log(this.model);
      this.authservice.postLogin(f.value).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      this.dataService.token = data['token'];
      console.log(this.dataService.token);
      if (this.dataService.token !== null) {
        this.router.navigateByUrl('/home');
        this.authservice.isAuthenticate.next(true);
      } else {
        this.authservice.isAuthenticate.next(false);
        this.presentToast();
      }
    }, err => {
      console.log(err.message);
      this.presentToast();
    }
    );
      if (this.authservice.isAuthenticate) {
      console.log('you are authenticated');
    } else {
     console.log('loda kuch ni hua');
      }

  }

  async presentToast() {
    const toast = await this.tost.create({
      message: 'ooohhh bawle sahi password bhar',
      duration: 3000
    });
    toast.present();
  }
}
