import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-registration-search',
  templateUrl: './registration-search.component.html',
  styleUrls: ['./registration-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
