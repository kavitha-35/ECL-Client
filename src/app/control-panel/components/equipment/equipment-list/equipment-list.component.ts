import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentListComponent implements OnInit {
  @Input() equipment: EquipmentListComponent[];
  constructor() { }

  ngOnInit(): void {
  }

}
