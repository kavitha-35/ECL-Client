import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-human-resource',
  templateUrl: './edit-human-resource.component.html',
  styleUrls: ['./edit-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditHumanResourceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onEditHumanResourceClicked(): void {}
}
