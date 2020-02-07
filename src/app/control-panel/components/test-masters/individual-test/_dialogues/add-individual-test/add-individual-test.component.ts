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
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { ReferenceRange, ValuesModel } from 'app/control-panel/models/reference-range/reference-range. model';

@Component({
  selector: 'app-add-individual-test',
  templateUrl: './add-individual-test.component.html',
  styleUrls: ['./add-individual-test.component.scss'],
})
export class AddIndividualTestComponent implements OnInit {
  value: string;
  deleteValue: string;
  public checked: boolean;
  public processingCenter: OutsourcingManagementModel[];
  public units: LookUpModel[];
  public doctor: DoctorModel[];
  public methods: MethodModel[];
  public equipments: EquipmentModel[];
  public accrediationSymbols: LookUpModel[];
  public editorConfig: any;
  public accrediationSymbolsFilter: LookUpModel[];
  referenceRangeList: ReferenceRange[] = [];
  minutes: number[] = [];
  hours: number[] = [];
  days: number[] = [];
  values: string[] = [];
  constructor(
    private readonly dialogRef: MatDialogRef<AddIndividualTestComponent>,
    private readonly _individualTestService: IndividualTestService,
    private readonly lookUpService: LookupService,
    private readonly _equipmentService: EquipmentService,
    private readonly _methodService: MethodService,
    private readonly _outsourceService: OutsourceManagementService,
  ) {
    this.checked = false;
    this.value = '';
    this.deleteValue = '';
    this.editorConfig = {
      uiColor: '#ffffff',
      toolbarGroups: [
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
        { name: 'styles' },
        { name: 'colors' },
      ],
      resize_enabled: true,
      removePlugins: 'elementspath,save,magicline',
      extraPlugins: 'smiley,justify,indentblock,colordialog',
      colorButton_foreStyle: {
        element: 'font',
        attributes: { color: '#(color)' },
      },
      height: 75,
      removeDialogTabs: 'image:advanced;link:advanced',
      removeButtons: 'Subscript,Superscript,Anchor,Source',
      format_tags: 'p;h1;h2;h3;pre;div',
    };
  }

  ngOnInit(): void {
    this.getProcessingCenter();
    this.getUnits();
    this.addReferenceRange();
    this.getEquipments();
    this.getMethods();
    this.getAccrediationSymbol();
    this.initializeValues();
  }

  public onAddIndividualTestButtonClicked(individualTest: NgForm): void {
    individualTest.form.value.referenceRange = this.referenceRangeList;
    console.log(individualTest.form.value);
    this._individualTestService.addIndividualTest(individualTest.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }

  public initializeValues(): void {
    for (let i = 1; i < 25; i++) {
      this.hours.push(i);
    }
    for (let i = 1; i < 61; i++) {
      this.minutes.push(i);
    }
    for (let i = 1; i < 91; i++) {
      this.days.push(i);
    }
  }

  onAddValuesClicked(): void {
    this.values.push(this.value);
    this.value = null;
  }

  public checkReferenceRangeEditors(): void {
    this.checked = !this.checked;
  }
  onDeleteValuesClicked(): void {
    const index = this.values.indexOf(this.deleteValue);
    if (index >= 0) {
      this.values.splice(index, 1);
    }
  }

  public getProcessingCenter(): void {
    this._outsourceService.getAllOutsourcing().subscribe((data) => {
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
      this.accrediationSymbolsFilter = this.accrediationSymbols;
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

  public onKeySearch(value: string): void {
    if (value) {
      this.selectSearch(value);
    } else {
      this.accrediationSymbols = this.accrediationSymbolsFilter;
    }
  }

  public selectSearch(value: string): void {
    this.accrediationSymbols = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.accrediationSymbolsFilter.length; i++) {
      const option = this.accrediationSymbolsFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.accrediationSymbols.push(option);
      }
    }
  }

  public addReferenceRange(): void {
    const referenceRange = new ReferenceRange();
    referenceRange.values = this.values;
    this.referenceRangeList.push(referenceRange);
    console.log(this.referenceRangeList);
    this.values = [];
    this.value = '';
  }

  public cancelReferenceRange(referenceRange: ReferenceRange): void {
    const index: number = this.referenceRangeList.indexOf(referenceRange);
    if (index !== -1) {
      this.referenceRangeList.splice(index, 1);
    }
  }
}
