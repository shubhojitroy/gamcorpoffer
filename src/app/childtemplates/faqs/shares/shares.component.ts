import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.scss']
})
export class SharesComponent implements OnInit {

  pageTitle = 'Shares';
  pageSubtitle = 'How do I apply for Shares?';
  constructor() { }

  ngOnInit() {
  }

}
