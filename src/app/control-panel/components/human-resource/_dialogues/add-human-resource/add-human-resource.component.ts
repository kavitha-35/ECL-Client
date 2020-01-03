import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HumanResourceService } from './../../../../../providers'

@Component({
  selector: 'app-add-human-resource',
  templateUrl: './add-human-resource.component.html',
  styleUrls: ['./add-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHumanResourceComponent implements OnInit {

  // todo
  // please set a model schema for human resource
  public department = {
    departmentName: "",
    departmentType: "",
    doctor: ""
  }
  
  constructor(private readonly dialogRef: MatDialogRef<AddHumanResourceComponent>, private humanResourceService: HumanResourceService) { }

  ngOnInit(): void {
  }

  public onAddHumanResourceClicked(): void {}

  public addHumanResource() {
    console.log('add new human resource');
    let payload = {
      "departmentName": "Bio chemis",
      "departmentType": "1",
      "doctor": "2"
    }
    this.humanResourceService.addHumanResource(payload).subscribe((response) => {
      if (response) {
        console.log(response)
      }
    }, (error) => {
    });
  }

}
