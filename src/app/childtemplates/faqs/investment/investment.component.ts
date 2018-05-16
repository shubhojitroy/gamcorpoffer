import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  pageTitle = 'Investment';
  pageSubtitle = 'Is participating in the Offer a good investment?';
  constructor() { }

  ngOnInit() {
  }

}
