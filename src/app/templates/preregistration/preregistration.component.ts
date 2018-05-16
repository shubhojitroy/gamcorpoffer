import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'go-preregistration',
  templateUrl: './preregistration.component.html',
  styleUrls: ['./preregistration.component.scss']
})
export class PreregistrationComponent implements OnInit {

  pageTitle = 'Expression of interest';

  cardLabel = 'Country of Primary Residence';
  countryform: FormGroup;
  country: FormControl;
  countries = [
    'Australia',
    'New Zealand',
    'Singapore',
    'Hongkong',
    'China'
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.countryform = new FormGroup ({
      country: this.country
    });
  }

  onSubmit() {
    if (this.countryform.valid) {
      if (this.country.value === 'Australia') {
        console.log('Form Submitted!', this.countryform.value);
        this.router.navigate(['/faqs']);
        this.countryform.reset();
      } else if (this.country.value === 'New Zealand') {
        this.router.navigate(['/faqs']);
      } else {
        this.router.navigate(['/welcome']);
      }
    }
  }

  onFaqs() {
    this.router.navigate(['/faqs']);
  }

}
