import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddEquipmentComponent } from './_dialogues/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './_dialogues/edit-equipment/edit-equipment.component';
import { take } from 'rxjs/operators';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  public equipment: EquipmentModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingEquipments: boolean;

  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _equipmentService: EquipmentService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllEquipment();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddEquipmentButtonClicked(): void {
    this._matDialog
      .open(AddEquipmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllEquipment();
      });
  }

  public onEditEquipmentClicked(): void {
    this._matDialog
      .open(EditEquipmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllEquipment(): void {
    this.isFetchingEquipments = true;
    this._equipmentService.getAllEquipment().subscribe((data: EquipmentModel[]) => {
      this.equipment = data;
      console.log(data);
      this.isFetchingEquipments = false;
      this.cRef.detectChanges();
    });
  }
}
