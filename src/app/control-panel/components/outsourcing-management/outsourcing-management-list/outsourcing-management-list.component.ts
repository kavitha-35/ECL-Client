import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';

@Component({
  selector: 'app-outsourcing-management-list',
  templateUrl: './outsourcing-management-list.component.html',
  styleUrls: ['./outsourcing-management-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutsourcingManagementListComponent implements OnInit {
 @Input() labs : OutsourcingManagementModel[];
 @Output() editReferalLabClicked = new EventEmitter<string>();
 @Output() deleteReferalLabClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  public onEditReferalLabClicked(outsource: any): void {
    console.log('Selected row', outsource);
    this.editReferalLabClicked.emit(outsource);
  }

  public onDeleteReferalLabClicked(outsourceId: string): void {
    this.deleteReferalLabClicked.emit(outsourceId);
  }
}
