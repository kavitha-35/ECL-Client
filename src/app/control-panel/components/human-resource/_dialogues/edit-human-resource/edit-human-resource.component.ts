import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HumanResourceService } from './../../../../../providers'

@Component({
  selector: 'app-edit-human-resource',
  templateUrl: './edit-human-resource.component.html',
  styleUrls: ['./edit-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditHumanResourceComponent implements OnInit {

  // todo
  // please set a model schema for human resource
  public department = {
    departmentName: "",
    departmentType: "",
    doctor: ""
  }

  constructor(private humanResourceService: HumanResourceService) { }

  ngOnInit(): void {
  }

  public onEditHumanResourceClicked(): void {}

  public editHumanResource() {
    console.log('edit human resource');
    let id = 1;
    let payload = {
      "departmentName": "Bio chemis",
      "departmentType": "1",
      "doctor": "2"
    };
    this.humanResourceService.updateHumanResource(id, payload).subscribe((response) => {
      if (response) {
        console.log(response)
      }
    }, (error) => {
    });
  }
  
}
