import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ReferenceRangeService } from 'app/control-panel/services/reference-range.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-reference-range',
  templateUrl: './add-reference-range.component.html',
  styleUrls: ['./add-reference-range.component.scss'],
})
export class AddReferenceRangeComponent {
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferenceRangeComponent>,
    private readonly _referenceRangeService: ReferenceRangeService,
  ) {}

  onAddReferenceRangeClicked(referenceRange: NgForm): void {
    console.log(referenceRange.form.value);
    this._referenceRangeService.addReferenceRange(referenceRange.form.value).subscribe((data) => {
      this._dialogRef.close();
    });
  }
}
