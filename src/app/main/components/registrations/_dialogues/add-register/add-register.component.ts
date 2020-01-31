import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from 'app/main/models/registration/registration.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRegisterComponent implements OnInit {
  public tests: IndividualTestModel[];
  selectedTests: IndividualTestModel[];
  isBusy: boolean;

  constructor(
    private readonly _combinedTestService: CombinedTestService,
    private readonly _dialogRef: MatDialogRef<AddRegisterComponent>,
    /*private readonly commentService: CommentService,*/
  ) {}

  ngOnInit(): void {}

  public onAddRegisterClicked(registration: NgForm): void {
    /*comment.form.value.lookupName = 'comment';
    console.log(comment.form.value);
    /*this.commentService.addComment(comment.form.value).subscribe((data) => {
      this._dialogRef.close();
    });*/
  }
  public searchQuery(event: any): void {
    this.selectedTests = this._filter(event.target.value);
  }
  private _filter(value: string): IndividualTestModel[] {
    const filterValue = value.toLowerCase();
    return this.tests.filter((option) => option.testComponent.toLowerCase().includes(filterValue));
  }
  public getAllIndividualTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      this.isBusy = false;
    });
  }
}
