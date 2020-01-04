import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HumanResourceService } from 'app/control-panel/services/human-resource.service';

@Component({
  selector: 'app-add-human-resource',
  templateUrl: './add-human-resource.component.html',
  styleUrls: ['./add-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHumanResourceComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<AddHumanResourceComponent>,
    private _humanResourceService: HumanResourceService
  ) { }

  ngOnInit(): void {
  }

  public onAddHumanResourceClicked(): void {}

  public addHumanResource(): void {}
}
