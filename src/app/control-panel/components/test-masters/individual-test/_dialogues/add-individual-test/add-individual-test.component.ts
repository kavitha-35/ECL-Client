import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { IndividualTestService } from 'app/control-panel/services/individual-test.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { MethodService } from 'app/control-panel/services/method.service';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';

@Component({
  selector: 'app-add-individual-test',
  templateUrl: './add-individual-test.component.html',
  styleUrls: ['./add-individual-test.component.scss'],
})
export class AddIndividualTestComponent implements OnInit {
  public processingCenter: LookUpModel[];
  public units: LookUpModel[];
  public doctor: DoctorModel[];
  public methods: MethodModel[];
  public equipments: EquipmentModel[];
  public accrediationSymbols: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<AddIndividualTestComponent>,
    private readonly _individualTestService: IndividualTestService,
    private readonly lookUpService: LookupService,
    private readonly _equipmentService: EquipmentService,
    private readonly _methodService: MethodService
  ) {}

  ngOnInit(): void {
    this.getProcessingCenter();
    this.getUnits();
    this.getEquipments();
    this.getMethods();
    this.getAccrediationSymbol();
  }

  public onAddIndividualTestButtonClicked(individualTest: NgForm): void {
    console.log(individualTest.form.value);
    this._individualTestService.addIndividualTest(individualTest.form.value).subscribe(() => {
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

  public getAccrediationSymbol(): void {
    this.lookUpService.getLookUp('accreditationSymbol').subscribe((data: LookUpModel[]) => {
      this.accrediationSymbols = data;
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
    });
  }

}
