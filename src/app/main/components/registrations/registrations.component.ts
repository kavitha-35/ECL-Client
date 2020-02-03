import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, PageEvent, MatDialogConfig } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { take } from 'rxjs/operators';
import { AddRegisterComponent } from './_dialogues/add-register/add-register.component';
import { RegistrationListService } from 'app/main/services/registration-list.service';
import { RegistrationListModel } from 'app/main/models/registration-list/registration-list.model';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent implements OnInit {
  /*public comments: LookUpModel[];*/
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingRegister: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };
  registrations: RegistrationListModel[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly registrationService: RegistrationListService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllRegistration();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddRegisterButtonClicked(): void {
    this._matDialog
      .open(AddRegisterComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
    /*.subscribe(() => {
      this.getAllComment();
      });*/
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllRegistration(): void {
    this.registrationService.getAllRegistrationList().subscribe((data) => {
      this.registrations = data;
      console.log(data);
    });
  }
}
