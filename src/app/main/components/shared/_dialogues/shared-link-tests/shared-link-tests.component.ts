import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { TestModel } from '../../../../models/tests/test.model';
import { TestsFacade } from '../../../../state/tests/tests.facade';
import { LinkTestModel } from '../../../../models/tests/link-test.model';

@Component({
  selector: 'app-link-tests',
  templateUrl: './shared-link-tests.component.html',
  styleUrls: ['./shared-link-tests.component.scss']
})
export class SharedLinkTestsComponent implements OnInit {
  public linkedTests$             : Observable<LinkTestModel[]>;
  public searchQuery              : string;

  constructor(
    private readonly _dialogRef: MatDialogRef<SharedLinkTestsComponent>,
    private readonly _testsFacade: TestsFacade
    ) {
  }

  ngOnInit(): void {
    this.linkedTests$ = this._testsFacade.searchResults$;
  }

  public onSearchButtonClicked(): void {}
}
