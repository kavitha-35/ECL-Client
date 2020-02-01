import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from 'app/main/models/registration/registration.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { MatTable } from '@angular/material';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { PatientModel } from 'app/main/models/patient/patient.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { OrganisationService } from 'app/control-panel/services/organisation.service';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRegisterComponent implements OnInit {
  // public tests: IndividualTestModel[];
  // selectedTests: IndividualTestModel[];
  public organisations : OrganisationModel[];
  public patient: PatientModel = new PatientModel();
  public combinedTestData          : CombinedTestModel[] = [];
  public combinedTests: CombinedTestModel[];
  public selectedCombinedTests: CombinedTestModel[];
  public countries: LookUpModel[];
  public cities: LookUpModel[];
  isBusy: boolean;
  groupById: number;
  orderById: number;
  testsInTable: IndividualTestModel[] = [];
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;
  constructor(
    private readonly _lookUpService: LookupService,
    private readonly _combinedTestService: CombinedTestService,
    private readonly _organisationservice: OrganisationService,
    private readonly _dialogRef: MatDialogRef<
      AddRegisterComponent
    > /*private readonly commentService: CommentService,*/,
  ) {
    this.groupById = 0;
    this.orderById = 0;
  }

  ngOnInit(): void {
    this.getAllCombinedTest();
    this.getCountries();
    this.getCities();
    this.getOrganizations();
  }

  public onAddRegisterClicked(registration: NgForm): void {
    /*comment.form.value.lookupName = 'comment';
    console.log(comment.form.value);
    /*this.commentService.addComment(comment.form.value).subscribe((data) => {
      this._dialogRef.close();
    });*/
  }
  public searchQuery(event: any): void {
    this.selectedCombinedTests = this._filter(event.target.value);
  }

  private _filter(value: string): CombinedTestModel[] {
    const filterValue = value.toLowerCase();
    return this.combinedTests.filter((option) => option.testName.toLowerCase().includes(filterValue));
  }

  public selectedAutoComplete(element: CombinedTestModel): void {
    this.combinedTestData.push(element);
    console.log('combined test selected result', this.combinedTestData);
    // this.linkTestComponent.refreshTable();
  }

  public getAllCombinedTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllTests().subscribe((data: CombinedTestModel[]) => {
      console.log('combined test result', data);
      this.combinedTests = data;
      this.isBusy = false;
    });
  }
  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
    });
  }
  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      console.log(data);
    });
  }
  public getOrganizations(): void {
    this._organisationservice.getAllOrganisations().subscribe((data) => {
      this.organisations = data;
    });
  }
}
