import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-legality',
  templateUrl: './legality.component.html',
  styleUrls: ['./legality.component.scss']
})
export class LegalityComponent implements OnInit {

  pageTitle = 'Legality';
  pageSubtitle = 'Legal Notices';
  constructor() { }

  ngOnInit() {
  }

}
