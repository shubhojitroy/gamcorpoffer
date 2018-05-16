import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  pageTitle = 'Investments for Aspirations';
  imageSrc = './assets/images/investmentsheroimage.png';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
