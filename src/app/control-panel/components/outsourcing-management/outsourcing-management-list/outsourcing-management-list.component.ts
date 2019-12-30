import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';

@Component({
  selector: 'app-outsourcing-management-list',
  templateUrl: './outsourcing-management-list.component.html',
  styleUrls: ['./outsourcing-management-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutsourcingManagementListComponent implements OnInit {
 @Input() labs : OutsourcingManagementModel[]
  constructor() { }

  ngOnInit(): void {
  }

}
