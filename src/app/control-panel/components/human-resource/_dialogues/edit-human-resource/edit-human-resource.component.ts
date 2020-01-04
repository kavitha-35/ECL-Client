import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HumanResourceService } from 'app/control-panel/services/human-resource.service';

@Component({
  selector: 'app-edit-human-resource',
  templateUrl: './edit-human-resource.component.html',
  styleUrls: ['./edit-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditHumanResourceComponent implements OnInit {
  constructor(
    private _humanResourceService: HumanResourceService
  ) { }

  ngOnInit(): void {
  }

  public onEditHumanResourceClicked(): void {}

  public editHumanResource(): void {}
}
