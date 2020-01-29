import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { EquipmentModel } from '../../../models/equipments/equipments.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment-list-data-table',
  templateUrl: './equipment-list-data-table.component.html',
  styleUrls: ['./equipment-list-data-table.component.scss'],
})
export class EquipmentListDataTableComponent implements OnInit {
  @Input() equipment: EquipmentModel[];
  @Input() isBusy: boolean;
  @Output() viewEquipmentClicked = new EventEmitter();
  @Output() editEquipmentClicked = new EventEmitter();
  @Output() deleteEquipmentClicked = new EventEmitter();

  displayedColumns: string[] = ['id', 'brand', 'machine', 'model', 'serial', 'action'];
  public equipments: EquipmentModel[];
  filteredColumns: { columnName: string; displayValue: string; isSelected: boolean; }[];
  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }
  public onEditEquipmentClicked(equipment: EquipmentModel): void {
    this.editEquipmentClicked.emit(equipment);
  }
  public onViewEquipmentClicked(equipment: EquipmentModel): void {
    this.viewEquipmentClicked.emit(equipment);
  }
  public onDeleteEquipmentClicked(): void {
    this.deleteEquipmentClicked.emit();
  }
  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Equipment Id', isSelected: true },
      { columnName: 'assetName', displayValue: 'Asset Name', isSelected: true },
      { columnName: 'brand', displayValue: 'Brand', isSelected: true },
      { columnName: 'machine', displayValue: 'Machine', isSelected: true },
      { columnName: 'puchaseFrom', displayValue: 'Puchase From', isSelected: true },
      { columnName: 'model', displayValue: 'Manufacturer Model', isSelected: true },
      { columnName: 'serialNo', displayValue: 'Serial No', isSelected: true },
      { columnName: 'supplier', displayValue: 'Supplier', isSelected: true },
      { columnName: 'condition', displayValue: 'Condition', isSelected: false },
      { columnName: 'warranty', displayValue: 'Warranty', isSelected: false },
      { columnName: 'depreciation', displayValue: 'Depreciation', isSelected: false },
      { columnName: 'value', displayValue: 'Value', isSelected: false },
      { columnName: 'location', displayValue: 'Location', isSelected: true },
      { columnName: 'description', displayValue: 'Description', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
}
}
