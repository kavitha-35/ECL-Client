import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationListComponent implements OnInit {
@Input() organisations : OrganisationModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
