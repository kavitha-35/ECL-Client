import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ReferenceRangeModel } from 'app/control-panel/models/reference-range/reference-range. model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reference-range-data-table',
  templateUrl: './reference-range-data-table.component.html',
  styleUrls: ['./reference-range-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceRangeDataTableComponent implements OnInit {
  @Input() referenceRanges: ReferenceRangeModel[];
  @Input() isBusy: boolean;
  @Output() editReferenceRangeClicked = new EventEmitter();
  @Output() deleteReferenceRangeClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  @ViewChild('TABLE', { static: false }) table: ElementRef;
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditReferenceRangeClicked(): void {
    this.editReferenceRangeClicked.emit();
  }

  public onDeleteReferenceRangeClicked(): void {
    this.deleteReferenceRangeClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'code', displayValue: 'Code', isSelected: true },
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'units', displayValue: 'Units', isSelected: true },
      { columnName: 'type', displayValue: 'Type', isSelected: true },
      { columnName: 'result', displayValue: 'Result', isSelected: true },
      { columnName: 'min', displayValue: 'Min', isSelected: true },
      { columnName: 'max', displayValue: 'Max', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
