import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-add-referal-lab',
  templateUrl: './add-referal-lab.component.html',
  styleUrls: ['./add-referal-lab.component.scss'],
})
export class AddReferalLabComponent implements OnInit {
  public regions: LookUpModel[];
  public countries: LookUpModel[];
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
    private readonly _lookUpService: LookupService,
  ) {}

  ngOnInit(): void {
    this.getRegions();
    this.getCountries();
  }
  public onAddReferalLabClicked(outsource: NgForm): void {
    this.outsourcingService.addOutsourcing(outsource.form.value).subscribe(() => {
      this._dialogRef.close();
    });
  }

  public getRegions(): void {
    this._lookUpService.getLookUp('region').subscribe((data: LookUpModel[]) => {
      this.regions = data;
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }
}
