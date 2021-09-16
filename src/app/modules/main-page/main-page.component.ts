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

  constructor() { }

  ngOnInit() {
    this.devicePath = Images.device;
    this.correctIconPath = Images.correctIcon;
  }

}
