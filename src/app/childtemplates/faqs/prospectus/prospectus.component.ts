import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  pageTitle = 'Prospectus';
  pageSubtitle = 'How can I get a Prospectus?';
  constructor() { }

  ngOnInit() {
  }

}
