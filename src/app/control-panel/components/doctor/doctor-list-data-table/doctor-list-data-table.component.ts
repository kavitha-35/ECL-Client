import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-doctor-list-data-table',
  templateUrl: './doctor-list-data-table.component.html',
  styleUrls: ['./doctor-list-data-table.component.scss'],
})
export class DoctorListDataTableComponent implements OnInit {
  @Input() doctors: DoctorModel[];
  @Input() isBusy: boolean;
  @Output() editDoctorClicked: EventEmitter<DoctorModel>;
  @Output() deleteDoctorClicked: EventEmitter<void>;
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {
    this.editDoctorClicked = new EventEmitter();
    this.deleteDoctorClicked = new EventEmitter();
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }
  public onEditDoctorClicked(doctors: DoctorModel): void {
    this.editDoctorClicked.emit(doctors);
  }

  public onDeleteDoctorClicked(): void {
    this.deleteDoctorClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'name', displayValue: 'Doctor Name', isSelected: true },
      { columnName: 'organization', displayValue: 'organization', isSelected: true },
      { columnName: 'dateOfBirth', displayValue: 'Date Of Birth', isSelected: false },
      { columnName: 'dateOfAnniversary', displayValue: 'Date Of Anniversary', isSelected: false },
      { columnName: 'speciality', displayValue: 'Speciality', isSelected: true },
      { columnName: 'telephone', displayValue: 'Telephone', isSelected: false },
      { columnName: 'mobileNumber', displayValue: 'Mobile Number', isSelected: false },
      { columnName: 'whatsapp', displayValue: 'Whatsapp Number', isSelected: false },
      { columnName: 'email', displayValue: 'Email', isSelected: false },
      { columnName: 'address', displayValue: 'Address', isSelected: true },
      { columnName: 'pobox', displayValue: 'P.O.Box', isSelected: false },
      { columnName: 'area', displayValue: 'Area', isSelected: false },
      { columnName: 'city', displayValue: 'City', isSelected: true },
      { columnName: 'country', displayValue: 'Country', isSelected: false },
      { columnName: 'facebookId', displayValue: 'Facebook Id', isSelected: false },
      { columnName: 'instagramId', displayValue: 'Instagram Id', isSelected: false },
      { columnName: 'twitterId', displayValue: 'Twitter Id', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
