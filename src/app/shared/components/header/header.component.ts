import { Component, OnInit } from '@angular/core';
import { Images } from 'src/assets/images/indice.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoHeaderPath: string;
  public headerImagePath: string;
  public isMobile: boolean;

  constructor() { }

  ngOnInit() {
    this.logoHeaderPath = Images.logoHeader;

    if (window.screen.width < 500) {
      this.isMobile = true;
    }
  }

}
