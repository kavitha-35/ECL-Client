import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-human-resource',
  templateUrl: './add-human-resource.component.html',
  styleUrls: ['./add-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHumanResourceComponent implements OnInit {
  constructor(private readonly dialogRef: MatDialogRef<AddHumanResourceComponent>) {}

  ngOnInit(): void {}
  public onAddHumanResourceClicked(): void {}
}
