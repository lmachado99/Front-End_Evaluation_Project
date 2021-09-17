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

  constructor() { }

  ngOnInit() {
    this.logoHeaderPath = Images.logoHeader;
  }

}
