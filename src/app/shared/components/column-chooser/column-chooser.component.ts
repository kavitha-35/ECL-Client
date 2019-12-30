import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GridColumnModel } from '../../models/grid-column.model';

@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.scss'],
})
export class ColumnChooserComponent {
  @Input() public columns     : GridColumnModel[];
  @Output() public closed     : EventEmitter<GridColumnModel[]>;

  public filterQuery          : string;

  constructor() {
    this.closed = new EventEmitter<GridColumnModel[]>();
  }

  public onMenuClosed(): void {
    const selectedColumns = this.columns.filter(x => x.isSelected);
    this.closed.emit(selectedColumns);
  }

  public onMenuItemClicked(gridColumn: GridColumnModel): void {
    gridColumn.isSelected = !gridColumn.isSelected;
  }

  public onMenuClicked($event: MouseEvent): void {
    $event.stopPropagation();
  }
}
