import { Component, OnInit } from '@angular/core';
import { Images } from 'src/assets/images/indice.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public logoFooterPath: string;

  constructor() { }

  ngOnInit() {
    this.logoFooterPath = Images.logoFooter;
  }

}
