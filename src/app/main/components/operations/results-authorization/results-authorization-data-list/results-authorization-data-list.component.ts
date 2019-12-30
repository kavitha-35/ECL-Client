import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RegistrationModel } from 'app/main/models/registration/registration.model';

@Component({
  selector: 'app-results-authorization-data-list',
  templateUrl: './results-authorization-data-list.component.html',
  styleUrls: ['./results-authorization-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsAuthorizationDataListComponent {
  @Input() public registrations: RegistrationModel[];
  constructor() {}
}
