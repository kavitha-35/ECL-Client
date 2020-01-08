import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { OrganisationPriceListService } from 'app/control-panel/services/organisation-price-list.service';

@Component({
  selector: 'app-add-organisation-price-list',
  templateUrl: './add-organisation-price-list.component.html',
  styleUrls: ['./add-organisation-price-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddOrganisationPriceListComponent implements OnInit {
  constructor(private readonly dialogRef: MatDialogRef<AddOrganisationPriceListComponent>) {}

  ngOnInit(): void {}
  public onAddOrganisationPriceListClicked(): void {}
}
