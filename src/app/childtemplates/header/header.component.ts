import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageSrc = './assets/images/GAMlogo.svg';
  hrefTitle = 'Global Asset Management';
  constructor() { }

  ngOnInit() {
  }

}
