import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {

  pageTitle = 'Participation';
  pageSubtitle = 'Do I have to pre-register to participate in the Offer?';
  constructor() { }

  ngOnInit() {
  }

}
