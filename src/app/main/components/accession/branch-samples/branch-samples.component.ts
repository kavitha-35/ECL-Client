import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { SampleModel } from '../../../models/samples/sample.model';
import { AddSampleComponent } from './_dialogues/add-sample/add-sample.component';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-branch-samples',
  templateUrl: './branch-samples.component.html',
  styleUrls: ['./branch-samples.component.scss'],
})
export class BranchSamplesComponent implements OnInit {
  public sampleModels   : SampleModel[];
  public showListView   : boolean;
  public pageEvent      : PageEvent;
  public pageSizeOptions: number[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.initializeSampleModels();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddSampleButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog
      .open(AddSampleComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((sampleModel: SampleModel) => {
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
  private initializeSampleModels(): void {
    this.sampleModels = [
      {
        id: 1,
        accessionId: 11,
        containerType: { id: '1', name: 'Container Type 1' },
        sampleType: { id: '1', name: 'Sample Type 1' },
        description: 'Description 1',
        instruction: 'Instruction 1',
        isPrefix: true,
        name: 'Sample Name 1',
      },
      {
        id: 2,
        accessionId: 12,
        containerType: { id: '1', name: 'Container Type 2' },
        sampleType: { id: '1', name: 'Sample Type 1' },
        description: 'Description 2',
        instruction: 'Instruction 2',
        isPrefix: false,
        name: 'Sample Name 2',
      },
      {
        id: 3,
        accessionId: 13,
        containerType: { id: '1', name: 'Container Type 2' },
        sampleType: { id: '1', name: 'Sample Type 2' },
        description: 'Description 3',
        instruction: 'Instruction 3',
        isPrefix: true,
        name: 'Sample Name 3',
      },
      {
        id: 4,
        accessionId: 14,
        containerType: { id: '1', name: 'Container Type 2' },
        sampleType: { id: '1', name: 'Sample Type 2' },
        description: 'Description 4',
        instruction: 'Instruction 4',
        isPrefix: true,
        name: 'Sample Name 4',
      },
      {
        id: 5,
        accessionId: 15,
        containerType: { id: '1', name: 'Container Type 3' },
        sampleType: { id: '1', name: 'Sample Type 2' },
        description: 'Description 5',
        instruction: 'Instruction 5',
        isPrefix: true,
        name: 'Sample Name 5',
      },
      {
        id: 6,
        accessionId: 16,
        containerType: { id: '1', name: 'Container Type 3' },
        sampleType: { id: '1', name: 'Sample Type 2' },
        description: 'Description 6',
        instruction: 'Instruction 6',
        isPrefix: true,
        name: 'Sample Name 6',
      },
      {
        id: 7,
        accessionId: 17,
        containerType: { id: '1', name: 'Container Type 1' },
        sampleType: { id: '1', name: 'Sample Type 2' },
        description: 'Description 7',
        instruction: 'Instruction 7',
        isPrefix: false,
        name: 'Sample Name 7',
      },
    ];
  }
}
