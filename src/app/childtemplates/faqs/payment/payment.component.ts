import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  pageTitle = 'Payment';
  pageSubtitle = 'How will I pay for Shares?';
  constructor() { }

  ngOnInit() {
  }

}
