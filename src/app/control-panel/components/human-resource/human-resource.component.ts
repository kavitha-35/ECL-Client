import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HumanResourceModel } from 'app/control-panel/models/human-resource/human-resource.model';
import { PageEvent, MatDialogConfig, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddHumanResourceComponent } from './_dialogues/add-human-resource/add-human-resource.component';
import { take } from 'rxjs/operators';
import { EditHumanResourceComponent } from './_dialogues/edit-human-resource/edit-human-resource.component';

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
        name: 'string',
        department: 'string',
        dateOfBirth: 'string',
        email: 'string',
        alternateEmail: 'string',
        contactNumber: 'string',
        alternateContactNumber: 'string',
        userCredentials: {
          defaultUrl: 'string',
          userName: 'string',
          password: 'string',
        },
        userPrevellege: {
          registration: 'string',
          operation: 'string',
          finance: 'string',
          admin: 'string',
          accession: 'string',
          departments: 'string',
          controlPanel: 'string',
        },
      },
    ];
  }
}
