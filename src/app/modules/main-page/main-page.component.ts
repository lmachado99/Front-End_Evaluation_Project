import { Component, OnInit } from '@angular/core';
import { Images } from 'src/assets/images/indice.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public devicePath: string;
  public correctIconPath: string;
  public linkIconPath: string;
  public phoneIconPath: string;

  constructor() { }

  ngOnInit() {
    this.devicePath = Images.device;
    this.correctIconPath = Images.correctIcon;
    this.linkIconPath = Images.linkIcon;
    this.phoneIconPath = Images.phoneIcon;
  }

}
