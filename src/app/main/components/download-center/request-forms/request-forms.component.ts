import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { RequestFormModel } from '../../../models/request-forms/request-form.model';

@Component({
  selector: 'app-request-forms',
  templateUrl: './request-forms.component.html',
  styleUrls: ['./request-forms.component.scss']
})
export class RequestFormsComponent {
  public requestForms         : RequestFormModel[];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this._initializeProperties();
  }

  public onDownloadButtonClicked(downloadUrl: string): void {
    this.document.location.href = downloadUrl;
  }

  private _initializeProperties(): void {
    this.requestForms = [
      { title: 'Request Form HIV Consent Form', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-hiv-consent-form/' },
      { title: 'Request Form Generic Testing Of Thalassemia Requisition', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-genetic-testing-of-thalassemia-requisition-form/' },
      { title: 'Request Form Chromosomal Analysis', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-chromosomal-analysis/' },
      { title: 'Request Form For Histopathology', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-for-histopathology/' },
      { title: 'Request Form For FNAC', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-for-fnac/' },
      { title: 'Request Form For Down\'s Syndrome Screen', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-for-downs-syndrome-screen/' },
      { title: 'Request Form For Cytology', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-form-for-cytology/' },
      { title: 'Request Form For Prenatal Diagnosis', type: 'pdf', url: 'https://ecl.ae/bfd_download/request-consent-form-for-prenatal-diagnosis/' },
      { title: 'Test Requisition Form Back', type: 'jpg', url: 'https://ecl.ae/bfd_download/test-requisition-form-back/' },
      { title: 'Test Requisition Form Front', type: 'jpg', url: 'https://ecl.ae/bfd_download/test-requisition-form-front/' }
    ]
  }

}
