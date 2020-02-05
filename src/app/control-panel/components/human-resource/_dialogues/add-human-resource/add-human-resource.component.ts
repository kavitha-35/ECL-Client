import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { DepartmentService } from 'app/control-panel/services/department.service';

@Component({
  selector: 'app-add-human-resource',
  templateUrl: './add-human-resource.component.html',
  styleUrls: ['./add-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHumanResourceComponent implements OnInit {
  public departments: DepartmentModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<AddHumanResourceComponent>,
    private readonly _departmentService: DepartmentService,
    ) {}
    ngOnInit(): void {
      this.getdepartments();
    }
    public onAddHumanResourceClicked(): void {}
    public getdepartments(): void {
      this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
        this.departments = data;
      });
    }
  }
