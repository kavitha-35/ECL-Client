import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';

import { GridColumnModel } from '../../../../shared/models/grid-column.model';
import { AppointmentModel } from '../../../models/appointment/appointment.model';
import { FilterItemModel } from '../../../../shared/models/filter-item.model';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss'],
})
export class AppointmentTableComponent implements OnInit, OnChanges {
  @Input() public appointments: AppointmentModel[];
  @Output() public rowSelected: EventEmitter<number>;
  @Output() public deleteAppointmentClicked: EventEmitter<number>;
  @Output() public editAppointmentClicked: EventEmitter<any>;
  @Output() public updateStatusClicked: EventEmitter<object>;

  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  public emailFilterList: FilterItemModel[];
  public filteredAppointments: AppointmentModel[];

  constructor() {
    this.emailFilterList = [];
    this.filteredAppointments = [];

    this.rowSelected = new EventEmitter<number>();
    this.deleteAppointmentClicked = new EventEmitter<number>();
    this.editAppointmentClicked = new EventEmitter<any>();
    this.updateStatusClicked = new EventEmitter<object>();
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appointments) {
      this.emailFilterList = this.appointments.map((appointment) => {
        return { isSelected: true, value: appointment.email };
      });

      this.filteredAppointments = this.appointments;
    }
  }

  public onRowClicked(selectedRow: AppointmentModel): void {
    this.rowSelected.emit(selectedRow.appointmentId);
  }

  public onEditClicked(selectedRow: any, mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
    this.editAppointmentClicked.emit(selectedRow);
  }

  public onDeleteClicked(appointmentId: number, mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
    this.deleteAppointmentClicked.emit(appointmentId);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onFilterClosed(selectedFilterItems: string[]): void {
    if (this.appointments.length === selectedFilterItems.length) {
      this.filteredAppointments = this.appointments;
      return;
    }

    this.filteredAppointments = this.appointments.filter((appointment) =>
      selectedFilterItems.some((x: string) => x === appointment.email),
    );
  }

  public onMenuButtonClicked(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'appointmentId', displayValue: 'Appointment ID', isSelected: true },
      { columnName: 'patientName', displayValue: 'Name', isSelected: true },
      { columnName: 'gender', displayValue: 'Gender', isSelected: true },
      { columnName: 'email', displayValue: 'Email', isSelected: true },
      { columnName: 'mobile', displayValue: 'Mobile Number', isSelected: true },
      { columnName: 'appointmentDate', displayValue: 'Scheduled Date', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];

    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }
  public updateAppointmentStatus(status: string, id: string): void {
    this.updateStatusClicked.emit({ appointmentStatus: status, appointmentId: id });
  }
}
