import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddReferalLabComponent } from './_dialogues/add-referal-lab/add-referal-lab.component';
import { take } from 'rxjs/operators';
import { EditReferalLabComponent } from './_dialogues/edit-referal-lab/edit-referal-lab.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';

@Component({
  selector: 'app-outsourcing-management',
  templateUrl: './outsourcing-management.component.html',
  styleUrls: ['./outsourcing-management.component.scss'],
})
export class OutsourcingManagementComponent implements OnInit {
  public outsourcedLab       : OutsourcingManagementModel[];
  public showListView        : boolean;
  public pageEvent           : PageEvent;
  public pageSizeOptions     : number[];
  public isFetchingReferalLab: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
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

  public onAddReferalLabButtonClicked(): void {
    this._matDialog
      .open(AddReferalLabComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onEditReferalLabClicked(): void {
    this._matDialog
      .open(EditReferalLabComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  private _initializeValues(): void {
    this.outsourcedLab =  [
      {
        id: '1',
        basicInformation: {
          labName: 'clininal laboratories',
          relation: true,
          address: 'business center,floor 1, office 107',
          postBox: '345 234',
          telephone: '971 423 44152',
          fax: '+1 323 555 1234' ,
          web: 'clinicalaboratories.com',
          region: 'al barsha',
          country: 'dubai',
          interfacingType: true,
          salesRepresentative: 'ahmed',
          courier: 'zain',
          contactMobile: '971 341 54421',
          mail: 'zain123@outlook.com',
        },
        paymentInformation: {
          paymentMode: 'credit',
          creditPeriod: '60 days'
        },
        loginInformation: {
          url: 'https://westernclinicallaboratorieslis.com',
          userName: 'eclreport',
          password: 'admin@890',
        },
      },
      {
        id: '2',
        basicInformation: {
          labName: 'clininal laboratories',
          relation: true,
          address: 'business center,floor 1, office 107',
          postBox: '345 234',
          telephone: '971 423 44152',
          fax: '+1 323 555 1234' ,
          web: 'clinicalaboratories.com',
          region: 'al barsha',
          country: 'dubai',
          interfacingType: true,
          salesRepresentative: 'ahmed',
          courier: 'zain',
          contactMobile: '971 341 54421',
          mail: 'zain123@outlook.com',
        },
        paymentInformation: {
          paymentMode: 'credit',
          creditPeriod: '60 days'
        },
        loginInformation: {
          url: 'https://westernclinicallaboratorieslis.com',
          userName: 'eclreport',
          password: 'admin@890',
        },
      },
      {
        id: '3',
        basicInformation: {
          labName: 'clininal laboratories',
          relation: true,
          address: 'business center,floor 1, office 107',
          postBox: '345 234',
          telephone: '971 423 44152',
          fax: '+1 323 555 1234' ,
          web: 'clinicalaboratories.com',
          region: 'al barsha',
          country: 'dubai',
          interfacingType: true,
          salesRepresentative: 'ahmed',
          courier: 'zain',
          contactMobile: '971 341 54421',
          mail: 'zain123@outlook.com',
        },
        paymentInformation: {
          paymentMode: 'credit',
          creditPeriod: '60 days'
        },
        loginInformation: {
          url: 'https://westernclinicallaboratorieslis.com',
          userName: 'eclreport',
          password: 'admin@890',
        },
      }
    ];
  }
}
