import { StorageService } from './../storage.service';
import { Questions } from './../home/model/questions';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { HomePage } from './../home/home.page';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private dataservice: DataService, private router: Router, private storage: StorageService) { }

  ngOnInit() {
  }
  reloadQuestion() {
   this.dataservice.getData().subscribe(data => {
    this.storage.setObject('QA_MASTER', data);
   // this.router.navigate(['/home', ]);
    this.router.navigate(['/home', {state: {reloadQuestion: true}}]);
    console.log('mai reload me hu' + data);
   });
  }

}
