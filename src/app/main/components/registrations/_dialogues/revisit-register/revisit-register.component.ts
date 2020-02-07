import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { MatTable, MatDialogRef } from '@angular/material';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { OrganisationService } from 'app/control-panel/services/organisation.service';
import { PatientServices } from 'app/main/services/patient.services';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';
import { PatientModel } from 'app/main/models/patient/patient.model';
import { LinkTestComponent } from 'app/main/components/registration/add-registration/link-test/link-test.component';

@Component({
  selector: 'app-revisit-register',
  templateUrl: './revisit-register.component.html',
  styleUrls: ['./revisit-register.component.scss'],
})
export class RevisitRegisterComponent implements OnInit {
  public organisations: OrganisationModel[];
  public patient: PatientModel = new PatientModel();
  public combinedTestData: CombinedTestModel[] = [];
  public combinedTests: CombinedTestModel[];
  public selectedCombinedTests: CombinedTestModel[];
  public countries: LookUpModel[];
  public cities: LookUpModel[];
  isBusy: boolean;
  @ViewChild(LinkTestComponent, { static: false }) private linkTestComponent: LinkTestComponent;

  groupById: number;
  orderById: number;
  testsInTable: IndividualTestModel[] = [];
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;
  constructor(
    private readonly _lookUpService: LookupService,
    private readonly _combinedTestService: CombinedTestService,
    private readonly _dialogRef: MatDialogRef<RevisitRegisterComponent>,
    private readonly _organisationservice: OrganisationService,
    private readonly _patientService: PatientServices,
  ) {}

  ngOnInit(): void {
    this.getAllCombinedTest();
    this.getCountries();
    this.getCities();
    this.getOrganizations();
  }

  public onAddRegisterClicked(): void {
    this.patient.tests = this.combinedTestData;
    console.log('patient payload', this.patient);
    this._patientService.savePatient(this.patient).subscribe((data) => {
      window.open(data.path, '_blank');
      this._dialogRef.close();
    });
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
    this.linkTestComponent.refreshTable();
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
      console.log(this.organisations);
    });
  }
}
