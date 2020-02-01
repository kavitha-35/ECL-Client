import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from 'app/main/models/registration/registration.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { PatientServices } from 'app/main/services/patient.services';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRegisterComponent implements OnInit {
  // public tests: IndividualTestModel[];
  // selectedTests: IndividualTestModel[];

  public combinedTestData          : CombinedTestModel[] = [];
  public combinedTests: CombinedTestModel[];
  public selectedCombinedTests: CombinedTestModel[];
  isBusy: boolean;

  constructor(
    private readonly _combinedTestService: CombinedTestService,
    private readonly _dialogRef: MatDialogRef<AddRegisterComponent>,
    /*private readonly commentService: CommentService,*/
    private readonly _patientService: PatientServices
  ) {}

  ngOnInit(): void {
    this.getAllCombinedTest();
  }

  public onAddRegisterClicked(): void {
    this._patientService.savePatient(null).subscribe((data) => {
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
}
