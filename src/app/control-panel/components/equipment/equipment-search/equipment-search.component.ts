import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-equipment-search',
  templateUrl: './equipment-search.component.html',
  styleUrls: ['./equipment-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentSearchComponent implements OnInit {
brands: LookUpModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
