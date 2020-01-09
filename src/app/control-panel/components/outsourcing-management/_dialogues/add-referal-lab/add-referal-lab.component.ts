import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';

@Component({
  selector: 'app-add-referal-lab',
  templateUrl: './add-referal-lab.component.html',
  styleUrls: ['./add-referal-lab.component.scss'],
})
export class AddReferalLabComponent {
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
  ) {}

  public onAddReferalLabClicked(outsource: NgForm): void {
    console.log(outsource.form.value);
    this.outsourcingService.addOutsourcing(outsource.form.value).subscribe(() => {
      this._dialogRef.close();
    });
  }
}
