import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  pageTitle = 'Frequently Asked Questions';
  constructor() { }

  ngOnInit() {
  }

}
