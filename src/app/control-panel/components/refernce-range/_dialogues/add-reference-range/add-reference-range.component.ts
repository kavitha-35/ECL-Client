import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReferenceRangeService } from 'app/control-panel/services/reference-range.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-reference-range',
  templateUrl: './add-reference-range.component.html',
  styleUrls: ['./add-reference-range.component.scss'],
})
export class AddReferenceRangeComponent {
  public testId: string;
  public editorConfig: any;
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferenceRangeComponent>,
    private readonly _referenceRangeService: ReferenceRangeService,
    @Inject(MAT_DIALOG_DATA) public indvidualTestId: string,
  ) {
    this.testId = indvidualTestId;
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

  onAddReferenceRangeClicked(referenceRange: NgForm): void {
    console.log(referenceRange.form.value);
    this._referenceRangeService.addReferenceRange(referenceRange.form.value).subscribe((data) => {
      this._dialogRef.close();
    });
  }
}
