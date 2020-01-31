import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
