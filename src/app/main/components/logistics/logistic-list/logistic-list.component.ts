import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

import { LogisticModel } from '../../../models/logistics/logistic.model';
import { HomeCollectionModel } from '../../../models/home-collections/home-collection.model';

@Component({
  selector: 'app-logistic-list',
  templateUrl: './logistic-list.component.html',
  styleUrls: ['./logistic-list.component.scss'],
})
export class LogisticListComponent implements OnInit, OnChanges {
  @Input() public isBusy: boolean;
  @Input() public isUpdateTrfButtonVisible: boolean;
  @Input() public logisticsCollections: LogisticModel[];
  @Output() public updateTrfButtonClicked: EventEmitter<HomeCollectionModel>;

  public preSelectedColumns: string[];
  public displayedColumns: string[];
  public allColumns: string[];
  public availableCity: string[];
  public selectedCity: string[] = [];
  public availableAreas: string[];
  public selectedAreas: string[] = [];
  public availableCountry: string[];
  public selectedCountry: string[] = [];
  public filteredLogistics: LogisticModel[] = [];

  constructor() {
    this.updateTrfButtonClicked = new EventEmitter<HomeCollectionModel>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.logisticsCollections) {
      const availableCities = this.logisticsCollections.map((item) => item.city);
      this.availableCity = Array.from(new Set(availableCities));

      const availableCountry = this.logisticsCollections.map((item) => item.country);
      this.availableCountry = Array.from(new Set(availableCountry));

      const availableAreas = this.logisticsCollections.map((item) => item.area);
      this.availableAreas = Array.from(new Set(availableAreas));

      this.filteredLogistics = this.logisticsCollections;
    }
  }

  ngOnInit(): void {
    this._initializeProperties();
  }

  public onUpdateTrfButtonClicked(mouseEvent: MouseEvent, selectedRow: HomeCollectionModel): void {
    mouseEvent.stopPropagation();
    this.updateTrfButtonClicked.emit(selectedRow);
  }

  private _initializeProperties(): void {
    this.allColumns = [
      'Id',
      'ScheduledOn',
      'Organization',
      'CalledBy',
      'LandLine',
      'Mobile',
      'Email',
      'Area',
      'City',
      'Country',
      'Driver',
      'ExpectedPickUpTime',
      'PickUpTime',
      'DeliverdTime',
      'DeliveredTo',
      'Status',
      'Action',
    ];
    this.displayedColumns = [
      'Id',
      'ScheduledOn',
      'Organization',
      'CalledBy',
      'LandLine',
      'Email',
      'ExpectedPickUpTime',
      'Status',
      'Action',
    ];
    this.preSelectedColumns = this.displayedColumns;
  }

  public onColumnFiltered(filteredColumns: string[]): void {
    this.displayedColumns = filteredColumns;
  }

  public filterRow(): void {
    if (this.selectedCity.length === 0 && this.selectedCountry.length === 0 && this.selectedAreas.length === 0) {
      this.filteredLogistics = this.logisticsCollections;
      return;
    }

    this.filteredLogistics = this.logisticsCollections.filter(
      (logistic) =>
        (this.selectedCity.length > 0 && this.selectedCity.indexOf(logistic.city) >= 0) ||
        (this.selectedCountry.length > 0 && this.selectedCountry.indexOf(logistic.country) >= 0) ||
        (this.selectedAreas.length > 0 && this.selectedAreas.indexOf(logistic.area) >= 0),
    );
  }
}
