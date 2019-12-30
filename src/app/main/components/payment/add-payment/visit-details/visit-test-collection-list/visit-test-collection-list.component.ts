import { Component, OnInit } from '@angular/core';
import { TestModel } from '../../../../../models/tests/test.model';

@Component({
  selector: 'app-visit-test-collection-list',
  templateUrl: './visit-test-collection-list.component.html',
  styleUrls: ['./visit-test-collection-list.component.scss']
})
export class VisitTestCollectionListComponent implements OnInit {
  public displayedColumns           : string[];
  public tests                      : TestModel[];

  ngOnInit(): void {
    this._initializeColumns();
    this._initializeTests();
  }

  private _initializeColumns(): void {
    this.displayedColumns = ['id', 'test', 'price'];
  }

  private _initializeTests(): void {
    this.tests = [
      // @ts-ignore
      { id: 1, name: 'Test 1', cost: 56 },
      // @ts-ignore
      { id: 2, name: 'Test 2', cost: 20 },
      // @ts-ignore
      { id: 3, name: 'Test 3', cost: 11 },
      // @ts-ignore
      { id: 4, name: 'Test 4', cost: 32 },
      // @ts-ignore
      { id: 5, name: 'Test 5', cost: 19 }
    ]
  }
}
