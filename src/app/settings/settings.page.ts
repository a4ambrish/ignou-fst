import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  home: HomePage;

  constructor() { }

  ngOnInit() {
  }
  reloadQuestion() {
    this.home.getingData();
    console.log('inside reload method');

  }

}
