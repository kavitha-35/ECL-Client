import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent {
  constructor(private readonly doctorService: DoctorService,
    private readonly dialogRef: MatDialogRef<AddDoctorComponent>) {}

  public onAddDoctorButtonClicked(doctor: NgForm): void {
    console.log(doctor.form.value);
    this.doctorService.addDoctor(doctor.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
