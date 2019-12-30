import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-home-collection',
  templateUrl: './add-home-collection.component.html',
  styleUrls: ['./add-home-collection.component.scss'],
})
export class AddHomeCollectionComponent {
  constructor(private readonly dialogRef: MatDialogRef<AddHomeCollectionComponent>) {}

  public onAddHomeCollectionClicked(): void {
    this.dialogRef.close();
  }
}
