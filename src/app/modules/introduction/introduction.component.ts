import { Component, OnInit } from '@angular/core';
import { Images } from 'src/assets/images/indice.enum';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  public bannerImagePath: string;
  public devicePath: string;
  public correctIconPath: string;
  public linkIconPath: string;
  public phoneIconPath: string;
  public isMobile: boolean;

  constructor() { }

  ngOnInit() {
    this.bannerImagePath = Images.bannerImage;
    this.devicePath = Images.device;
    this.correctIconPath = Images.correctIcon;
    this.linkIconPath = Images.linkIcon;
    this.phoneIconPath = Images.phoneIcon;

    if (window.screen.width < 500) { // 768px portrait
      this.isMobile = true;
    }
  }

}
