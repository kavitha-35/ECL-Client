import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent, MatDialogConfig, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { take } from 'rxjs/operators';
import { HumanResourceModel } from 'app/control-panel/models/human-resource/human-resource.model';
import { EditHumanResourceComponent } from './_dialogues/edit-human-resource/edit-human-resource.component';
import { AddHumanResourceComponent } from './_dialogues/add-human-resource/add-human-resource.component';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanResourceComponent implements OnInit {
  public humanResources: HumanResourceModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingHumanResources: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this._initializeValues();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }
  
  public onAddHumanResourceButtonClicked(): void {
    this.matDialog
      .open(AddHumanResourceComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onEditHumanResourceClicked(): void {
    this.matDialog
      .open(EditHumanResourceComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {});
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void {}

  public _initializeValues(): void {
    this.humanResources = [
      {
        id: '1',
        name: 'John Doe',
        department: 'ENT',
        dob: '12/04/1990',
        email: 'john@gmail.com',
        alternateEmail: 'john123@gmail.com',
        contactNo: '9876543210',
        alternateContactNo: '8765432109',
        defaultUrl: 'http://www.john.com'
      },
      {
        id: '1',
        name: 'Jane Doe',
        department: 'ENT',
        dob: '12/04/1990',
        email: 'jane@gmail.com',
        alternateEmail: 'jane123@gmail.com',
        contactNo: '9876543210',
        alternateContactNo: '8765432109',
        defaultUrl: 'http://www.jane.com'
      }
    ];
  }

}
