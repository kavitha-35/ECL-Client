import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { NgForm } from '@angular/forms';
import { IndividualTestService } from 'app/control-panel/services/individual-test.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { MethodService } from 'app/control-panel/services/method.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';

@Component({
  selector: 'app-edit-individual-test',
  templateUrl: './edit-individual-test.component.html',
  styleUrls: ['./edit-individual-test.component.scss'],
})
export class EditIndividualTestComponent implements OnInit {
  public selectedForEdit: IndividualTestModel;
  public processingCenter: LookUpModel[];
  public units: LookUpModel[];
  public methods: MethodModel[];
  public equipments: EquipmentModel[];
  public accrediationSymbols: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<EditIndividualTestComponent>,
    private readonly _individualTestService: IndividualTestService,
    private readonly lookUpService: LookupService,
    private readonly _equipmentService: EquipmentService,
    private readonly _methodService: MethodService,
    @Inject(MAT_DIALOG_DATA) public data: IndividualTestModel,
  ) {
    this.selectedForEdit = data;
    console.log(this.selectedForEdit);
  }

  ngOnInit(): void {
    this.getProcessingCenter();
    this.getUnits();
    this.getEquipments();
    this.getMethods();
    this.getAccrediationSymbol();
  }

  public onEditIndividualTestClicked(test: NgForm): void {
    console.log(test.form.value);
    this._individualTestService
      .updateIndividualTest(this.selectedForEdit.individualTestId, test.form.value)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  public getProcessingCenter(): void {
    this.lookUpService.getLookUp('processingCenter').subscribe((data: LookUpModel[]) => {
      this.processingCenter = data;
    });
  }
  public getUnits(): void {
    this.lookUpService.getLookUp('unit').subscribe((data: LookUpModel[]) => {
      this.units = data;
    });
  }

  public getMethods(): void {
    this._methodService.getAllMethod().subscribe((data: MethodModel[]) => {
      this.methods = data;
    });
  }

  public getEquipments(): void {
    this._equipmentService.getAllEquipment().subscribe((data: EquipmentModel[]) => {
      this.equipments = data;
      console.log(data);
    });
  }

  public getAccrediationSymbol(): void {
    this.lookUpService.getLookUp('accreditationSymbol').subscribe((data: LookUpModel[]) => {
      this.accrediationSymbols = data;
    });
  }
}
