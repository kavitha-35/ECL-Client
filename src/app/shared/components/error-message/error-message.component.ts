import { Component, Input } from '@angular/core';

import { ErrorMessageModel } from '../../models/error-message.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input()
  errorMessages: ErrorMessageModel[];
}
