import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { ReportFormatModel } from 'app/control-panel/models/report-format/report-format.model';

@Component({
  selector: 'app-report-format-table',
  templateUrl: './report-format-table.component.html',
  styleUrls: ['./report-format-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFormatTableComponent implements OnInit {
  @Input() reportFormat : ReportFormatModel[];
  @Input() isBusy: boolean;
  @Output() editReportFormatClicked = new EventEmitter();
  @Output() deleteReportFormatClicked = new EventEmitter<string>();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditReportFormatClicked(): void {
    this.editReportFormatClicked.emit();
  }

  public onDeleteReportFormatClicked(outsourceId: string): void {
    this.deleteReportFormatClicked.emit(outsourceId);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'ID', isSelected: true },
      { columnName: 'paperSize', displayValue: 'Paper Size', isSelected: true },
      { columnName: 'fontSize', displayValue: 'Font Size', isSelected: true },
      { columnName: 'fontType', displayValue: 'Font Type', isSelected: true },
      { columnName: 'headerSize', displayValue: 'Header Size', isSelected: true },
      { columnName: 'footerSize', displayValue: 'Footer Size', isSelected: true },
      { columnName: 'dateFormat', displayValue: 'Date Format', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
