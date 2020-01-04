import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'app/control-panel/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDepartmentComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<AddDepartmentComponent>,
    private readonly _departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {}

  onAddDepartmentClicked(department: NgForm): void {
    this._departmentService.addDepartment(department.form.value).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
