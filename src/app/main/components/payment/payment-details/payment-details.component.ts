import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TestsFacade } from '../../../state/tests/tests.facade';
import { LinkTestModel } from '../../../models/tests/link-test.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  public linkedTests$             : Observable<LinkTestModel[]>;

  constructor(private readonly _testsFacade: TestsFacade) { }

  ngOnInit(): void {
    this.linkedTests$ = this._testsFacade.searchResults$;
  }
}
