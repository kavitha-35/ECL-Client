import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SampleModel } from 'app/main/models/samples/sample.model';
import { TestModel } from '../../../models/tests/test.model';

const SAMPLE_DATA: SampleModel[] = [
  // @ts-ignore : testing
  { id: 1, name: 'Sample 1' },
  // @ts-ignore : testing
  { id: 2, name: 'Sample 2' },
  // @ts-ignore : testing
  { id: 3, name: 'Sample 3' },
  // @ts-ignore : testing
  { id: 4, name: 'Sample 4' },
  // @ts-ignore : testing
  { id: 5, name: 'Sample 5' },
];

const TEST_DATA: TestModel[] = [
  // @ts-ignore : testing
  { id: 1, name: 'TOXOPLASMA - IGM ANTIBODY', description: 'Bio-Chemistry', sampleId: 2 },
  // @ts-ignore : testing
  { id: 2, name: 'TOXOPLASMA - IGM ANTIBODY', description: 'Bio-Chemistry' },
  // @ts-ignore : testing
  { id: 3, name: 'TOXOPLASMA - IGM ANTIBODY', description: 'Bio-Chemistry' },
  // @ts-ignore : testing
  { id: 4, name: 'TOXOPLASMA - IGM ANTIBODY', description: 'Bio-Chemistry', sampleId: 2 },
  // @ts-ignore : testing
  { id: 5, name: 'TOXOPLASMA - IGM ANTIBODY', description: 'Bio-Chemistry', sampleId: 1 },
];


@Component({
  selector: 'app-sample-mapping',
  templateUrl: './sample-mapping.component.html',
  styleUrls: ['./sample-mapping.component.scss'],
})
export class SampleMappingComponent implements OnInit {

  public displayedColumns: string[] = [];
  public samples: SampleModel[] = [];
  public selection: SelectionModel<TestModel>;
  public dataSource: MatTableDataSource<TestModel>;

  ngOnInit(): void {
    this.displayedColumns = ['select', 'testName', 'department', 'sample'];
    this.samples = SAMPLE_DATA;
    this.dataSource = new MatTableDataSource<TestModel>(TEST_DATA);
    this.selection = new SelectionModel<TestModel>(true, []);
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numtests = this.dataSource.data.length;
    return numSelected === numtests;
  }

  public masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((test) => this.selection.select(test));
  }

  public checkboxLabel(test?: TestModel): string {
    if (!test) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(test) ? 'deselect' : 'select'} test ${test.id + 1}`;
  }
}
