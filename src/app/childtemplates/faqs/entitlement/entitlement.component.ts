import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-entitlement',
  templateUrl: './entitlement.component.html',
  styleUrls: ['./entitlement.component.scss']
})
export class EntitlementComponent implements OnInit {

  pageTitle = 'Entitlement';
  pageSubtitle = 'I am a client of the Organisation. Will I be entitled to receive shares in said Offer?';
  constructor() { }

  ngOnInit() {
  }

}
