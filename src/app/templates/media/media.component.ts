import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'go-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  pageTitle = 'Release';
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this._router.navigate(['/welcome']);
  }

}
