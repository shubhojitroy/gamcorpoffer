import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  pageTitle = 'Definition';
  pageSubtitle = 'What is Organisation?';
  constructor() { }

  ngOnInit() {
  }

}
