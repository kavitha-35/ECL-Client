import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkTestModel } from '../../../../models/tests/link-test.model';

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
      'name',
      'additionalCost',
      'discount',
      'action'
    ];
  }

}

