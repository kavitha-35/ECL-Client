import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipmentModel } from '../../../models/equipments/equipments.model';

@Component({
  selector: 'app-equipment-list-data-table',
  templateUrl: './equipment-list-data-table.component.html',
  styleUrls: ['./equipment-list-data-table.component.scss'],
})
export class EquipmentListDataTableComponent implements OnInit {
  @Input() isBusy: boolean;
  @Output() editEquipmentClicked = new EventEmitter();
  @Output() deleteEquipmentClicked = new EventEmitter();

  displayedColumns: string[] = ['id', 'brand', 'machine', 'model', 'serial', 'action'];
  public equipments: EquipmentModel[];
  constructor() {}

  ngOnInit(): void {
    this.equipments = [
      {
        id: '1',
        brand: 'Guard',
        machine: 'X-ray',
        model: 'x-200',
        serial: 'Bx4321788GJ',
      },
      {
        id: '2',
        brand: 'Guard',
        machine: 'X-ray',
        model: 'x-200',
        serial: 'Bx4321788GJ',
      },
      {
        id: '3',
        brand: 'Guard',
        machine: 'X-ray',
        model: 'x-200',
        serial: 'Bx4321788GJ',
      }
    ];
  }

  public onEditEquipmentClicked(): void {
    this.editEquipmentClicked.emit();
  }

  public onDeleteEquipmentClicked(): void {
    this.deleteEquipmentClicked.emit();
  }
}
