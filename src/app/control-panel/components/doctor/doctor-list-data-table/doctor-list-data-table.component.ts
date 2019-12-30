import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor-list-data-table',
  templateUrl: './doctor-list-data-table.component.html',
  styleUrls: ['./doctor-list-data-table.component.scss'],
})
export class DoctorListDataTableComponent  {
  public doctors = [
    {
      id: '1',
      name: 'DOC 1',
      area: 'chennai',
      city: 'chennai',
      country: 'India',
      specialist: 'eye',
    },
    {
      id: '2',
      name: 'DOc 2',
      area: 'chennai',
      city: 'chennai',
      country: 'India',
      specialist: 'eye',
    },
    {
      id: '3',
      name: 'Doc #',
      area: 'chennai',
      city: 'chennai',
      country: 'India',
      specialist: 'eye',
    },
  ];
  @Input() isBusy: boolean;
  @Output() editDoctorClicked = new EventEmitter();
  @Output() deleteDoctorClicked = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'area', 'city', 'country', 'specialist', 'action'];

  constructor() {}

  public onEditDoctorClicked(): void {
    this.editDoctorClicked.emit();
  }

  public onDeleteDoctorClicked(): void {
    this.deleteDoctorClicked.emit();
  }
}
