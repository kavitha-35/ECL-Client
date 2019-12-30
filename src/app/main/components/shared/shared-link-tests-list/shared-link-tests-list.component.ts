import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { LinkTestModel } from '../../../models/tests/link-test.model';

@Component({
  selector: 'app-link-tests-list',
  templateUrl: './shared-link-tests-list.component.html',
  styleUrls: ['./shared-link-tests-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SharedLinkTestsListComponent implements OnInit {
  @Input() public linkedTests           : LinkTestModel[];
  @Input() public showLinkIcon          : boolean;
  @Input() public showDeleteIcon        : boolean;

  public displayedColumns               : string[];

  ngOnInit(): void {
    this._initializeDisplayColumns();
  }

  private _initializeDisplayColumns(): void {
    this.displayedColumns = [
      'nestedSymbol',
      'id',
      'name',
      'averageTat',
      'price',
      'sample',
      'container',
      'isOutSourced',
      'type',
      'action'
    ];
  }
}
