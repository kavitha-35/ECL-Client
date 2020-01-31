import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkTestModel } from '../../../../models/tests/link-test.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-link-test',
  templateUrl: './link-test.component.html',
  styleUrls: ['./link-test.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LinkTestComponent implements OnInit {

  @Input() public linkedTests           : CombinedTestModel[];
  @Input() public showLinkIcon          : boolean;
  @Input() public showDeleteIcon        : boolean;

  public displayedColumns               : string[];
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  ngOnInit(): void {
    this._initializeDisplayColumns();
  }

  refreshTable(): void {
    this.table.renderRows();
  }

  private _initializeDisplayColumns(): void {
    this.displayedColumns = [
      'nestedSymbol',
      'combineTestId',
      'testName',
      'netFee',
      'action'
    ];
  }

}

