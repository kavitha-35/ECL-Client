import { Component, Input, OnInit } from '@angular/core';
import { SampleModel } from '../../../../models/samples/sample.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-branch-sample-table',
  templateUrl: './branch-sample-table.component.html',
  styleUrls: ['./branch-sample-table.component.scss'],
})
export class BranchSampleTableComponent implements OnInit {
  @Input() public sampleModels: SampleModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this.initializeDisplayedColumns();
  }

  private initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'ID', isSelected: true },
      { columnName: 'SampleName', displayValue: 'Sample Name', isSelected: true },
      { columnName: 'SampleType', displayValue: 'Sample Type', isSelected: true },
      { columnName: 'ContainerType', displayValue: 'Container Type', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
