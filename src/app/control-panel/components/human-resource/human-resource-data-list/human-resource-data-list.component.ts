import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HumanResourceModel } from 'app/control-panel/models/human-resource/human-resource.model';

@Component({
  selector: 'app-human-resource-data-list',
  templateUrl: './human-resource-data-list.component.html',
  styleUrls: ['./human-resource-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HumanResourceDataListComponent implements OnInit {

  @Input() humanResources: HumanResourceModel[];
  
  constructor() { }

  ngOnInit(): void {}

}
