import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FilterItemModel } from '../../../shared/models/filter-item.model';

@Component({
  selector: 'app-row-filter',
  templateUrl: './row-filter.component.html',
  styleUrls: ['./row-filter.component.scss']
})

export class RowFilterComponent {
  @Input() public allItems     : FilterItemModel[];
  @Output() public closed      : EventEmitter<string[]>;

  public filterQuery           : string;

  constructor() {
    this.closed = new EventEmitter<string[]>();
  }

  public onFilterClicked($event: MouseEvent): void {
    $event.stopPropagation();
  }

  public onFilterItemClicked(selectedFilterItem: FilterItemModel): void {
    selectedFilterItem.isSelected = !selectedFilterItem.isSelected;
  }

  public onFilterClosed(): void {
    const filteredItems = this.allItems.filter(x => x.isSelected).map(x => x.value);
    this.closed.emit(filteredItems);
  }
}
