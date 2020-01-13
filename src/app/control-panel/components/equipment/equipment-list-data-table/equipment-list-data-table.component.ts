import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipmentModel } from '../../../models/equipments/equipments.model';

@Component({
  selector: 'app-equipment-list-data-table',
  templateUrl: './equipment-list-data-table.component.html',
  styleUrls: ['./equipment-list-data-table.component.scss'],
})
export class EquipmentListDataTableComponent implements OnInit {
  @Input() equipment: EquipmentModel[];
  @Input() isBusy: boolean;
  @Output() editEquipmentClicked = new EventEmitter();
  @Output() deleteEquipmentClicked = new EventEmitter();

  displayedColumns: string[] = ['id', 'brand', 'machine', 'model', 'serial', 'action'];
  public equipments: EquipmentModel[];
  constructor() {}

  ngOnInit(): void {
  }
  public onEditEquipmentClicked(): void {
    this.editEquipmentClicked.emit();
  }

  public onDeleteEquipmentClicked(): void {
    this.deleteEquipmentClicked.emit();
  }
}
