import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {

  pageTitle = 'Cost';
  pageSubtitle = 'How much will shares Offer cost?';
  constructor() { }

  ngOnInit() {
  }

}
