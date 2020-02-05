import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import * as XLSX from 'xlsx';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-department-data-table',
  templateUrl: './department-data-table.component.html',
  styleUrls: ['./department-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentDataTableComponent implements OnInit, OnDestroy {
  @Input() departments: DepartmentModel[];
  @Input() isBusy: boolean;
  @Input() departmentSubject: Subject<any>;
  @Output() editDepartmentClicked = new EventEmitter();
  @Output() deleteDepartmentClicked = new EventEmitter();
  @Output() viewDepartmentClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  @ViewChild('TABLE', { static: false }) table: ElementRef;
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.departmentSubject.subscribe((data) => {
      if (data === DISPLAY_MODE.PDF) {
        this.downloadAsPDF();
      } else if (data === DISPLAY_MODE.EXCEL) {
        this.ExportTOExcel();
      } else if (data === DISPLAY_MODE.DOC) {
        this.exportAsDoc();
      }
    });
    this._initializeDisplayedColumns();
  }
  public exportAsDoc(): void {}

  public downloadAsPDF(): void {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
    });

    doc.save('department.pdf');
  }

  public onEditDepartmentClicked(department: DepartmentModel): void {
    this.editDepartmentClicked.emit(department);
  }

  public onDeleteDepartmentClicked(departmentId: string): void {
    this.deleteDepartmentClicked.emit(departmentId);
  }

  public onViewDepartmentClicked(department: DepartmentModel): void {
    this.viewDepartmentClicked.emit(department);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public ExportTOExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'department.xlsx');
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Department Id', isSelected: true },
      { columnName: 'departmentname', displayValue: 'Department Name', isSelected: true },
      { columnName: 'departmentType', displayValue: 'Department Type', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  ngOnDestroy(): void {
    this.departmentSubject.unsubscribe();
  }
}
