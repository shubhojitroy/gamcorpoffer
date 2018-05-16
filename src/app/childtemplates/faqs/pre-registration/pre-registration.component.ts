import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-pre-registration',
  templateUrl: './pre-registration.component.html',
  styleUrls: ['./pre-registration.component.scss']
})
export class PreRegistrationComponent implements OnInit {

  pageTitle = 'Pre-registration';
  pageSubtitle = 'Why should I pre-register?';
  constructor() { }

  ngOnInit() {
  }

}
