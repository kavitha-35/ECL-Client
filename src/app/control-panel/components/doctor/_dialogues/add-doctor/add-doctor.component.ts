import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'app/control-panel/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent {
  constructor(private readonly doctorService: DoctorService,
    private readonly dialogRef: MatDialogRef<AddDoctorComponent>) {}

  public onAddDoctorClicked(doctor: NgForm): void {
   console.log(doctor.form.value);
    this.dialogRef.close();
  }
}
