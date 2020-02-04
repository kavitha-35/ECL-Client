import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, PageEvent, MatDialogConfig } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { take } from 'rxjs/operators';
import { AddCreditnotesComponent } from './_dialogues/add-creditnotes/add-creditnotes.component';
/*import { CreditnotesModel } from 'app/control-panel/models/method/Creditnotes.model';
import { MethodService } from 'app/control-panel/services/method.service';*/

@Component({
  selector: 'app-credit-notes',
  templateUrl: './credit-notes.component.html',
  styleUrls: ['./credit-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditNotesComponent implements OnInit {
  /*public method: CreditnotesModel[];*/
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingMethods: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    /*private readonly _methodService: CreditnotesService,*/
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
   /* this.getAllCreditnotes();*/
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }
  public onAddCreditnotesButtonClicked(): void {
    this._matDialog
      .open(AddCreditnotesComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
    /*this.getAllCreditnotes();*/
  }
  /*public onDeleteMethodClicked(methodId: string): void {
    this._methodService.deleteMethod(methodId).subscribe(() => {
      this.getAllMethod();
    });
  }*/

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
  /*public getAllMethod(): void {
    this.isFetchingMethods = true;
    this._methodService.getAllMethod().subscribe((data: MethodModel[]) => {
      this.method = data;
      console.log(data);
      this.isFetchingMethods = false;
      this.cRef.detectChanges();
    });*/
  }
