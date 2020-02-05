import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddOrganisationComponent } from '../../shared/add-organisation/add-organisation.component';
import { take } from 'rxjs/operators';
import { EditOrganisationComponent } from './_dialogues/edit-organisation/edit-organisation.component';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { OrganisationService } from 'app/control-panel/services/organisation.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  public organisations: OrganisationModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingOrganisations: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _organisationService: OrganisationService
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

  public onAddOrganisationButtonClicked(): void {
    this.matDialog
      .open(AddOrganisationComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllOrganisations();
      });
  }

  public onEditOrganisationClicked(): void {
    this.matDialog
      .open(EditOrganisationComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllOrganisations();
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllOrganisations(): void {
    this.isFetchingOrganisations = true;
    this._organisationService.getAllOrganisations().subscribe((data) => {
      this.organisations = data;
      this.isFetchingOrganisations = false;
    });
  }

   public onDeleteTestClicked(id: string): void {
    this._organisationService.deleteOrganisation(id).subscribe(() => {
      this.getAllOrganisations();
    });
   }

  public _initializeValues(): void {
    this.organisations = [
      {
        id: '13807',
        clinicName: 'nasser clinic',
        type: 'collection centre',
        address: '1020, 1st floor, sunrise supermarket building,damascus road ',
        postBox: '96643',
        telephone: '42631316',
        fax: '+1 323 555 1234',
        web: 'www.naseerclinic.con',
        area: 'al qhusasis',
        region: 'dubai',
        country: 'UAE',
        salesRepresentative: 'yousuf ali',
        contactPerson: 'ahmed',
        contactNumber: '+971 50 45631367',
        email: 'ahmed@outlook.com',
        businessHours: '24 hours',
        remarks: 'string',
        localInformation: {
          language: 'arabic',
          timeZone: 'UAE(GMT+4)',
        },
        finance: {
          currency: 'dirham',
          paymentMode: 'credit',
          paymentType: 'postpaid',
          creditLimit: '_100000',
          currentDue: '-28763',
          revenueTarget: '1 year',
          reportAndBillStatus: 'never show the report to patirnts ',
        },
        userCredentials: {
          userId: 'nasserclinic',
          password: 'admin@345',
          branch: 'no',
        },
      },
    ];
  }
}
