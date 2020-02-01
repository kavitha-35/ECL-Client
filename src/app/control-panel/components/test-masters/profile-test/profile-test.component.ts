import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, PageEvent } from '@angular/material';
import { take } from 'rxjs/operators';
import { EditProfileTestComponent } from './_dialogues/edit-profile-test/edit-profile-test.component';
import { AddProfileTestComponent } from './_dialogues/add-profile-test/add-profile-test.component';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ProfileTestService } from 'app/control-panel/services/profiletest.service';

@Component({
  selector: 'app-profile-test',
  templateUrl: './profile-test.component.html',
  styleUrls: ['./profile-test.component.scss'],
})
export class ProfileTestComponent implements OnInit {
  public tests: ProfileTestModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public lastSavedTest: ProfileTestModel;
  public isFetchingTests: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private _profileTest: ProfileTestService,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getProfileDetails();
    this._initializeValues();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public getProfileDetails(): void {
    this._profileTest.getProfileDetails().subscribe(
      (data) => {
        this.tests = data;
        console.log('_profileTest', this.tests);
      },
      (err) => console.log('_profileTest', err),
    );
  }

  public onAddProfileTestButtonClicked(): void {
    this.matDialog
      .open(AddProfileTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public onManageButtonClicked(dosCode: string): void {
    console.log(dosCode);
    this._router.navigate(['/control-panel/profile-test-details'], { queryParams: { id: dosCode } });
  }

  public onEditTestClicked(): void {
    this.matDialog
      .open(EditProfileTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void {}

  public _initializeValues(): void {
    // this.tests = [
    //   {
    //     dosCode: 'ECL-767',
    //     testId: '1313741',
    //     cptCode: '82465',
    //     testName: 'cholestrol,Total',
    //     specimen: '2 ml serum',
    //     specimenType: 'serum',
    //     storage: 'refrigerated',
    //     department: 'biochemistry',
    //     patientFee: '40.00',
    //     netFee: '10.00',
    //     location: 'dubai',
    //     currency: 'dihram',
    //     combinedTest: [
    //       {
    //         dosCode: 'ECL-767',
    //         testId: '1313741',
    //         cptCode: '82465',
    //         testName: 'cholestrol,Total',
    //         specimen: '2 ml serum',
    //         specimenType: 'serum',
    //         storage: 'refrigerated',
    //         department: 'biochemistry',
    //         patientFee: '40.00',
    //         netFee: '10.00',
    //         location: 'dubai',
    //         currency: 'dihram',
    //         reportFormat: '',
    //       },
    //     ],
    //   },
    // ];

    this.tests = [];
  }
}
