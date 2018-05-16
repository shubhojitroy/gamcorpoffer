import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightText = '\u00A9 2018 Global Asset Management All Rights Reserved';
  constructor() { }

  ngOnInit() {
  }

}
