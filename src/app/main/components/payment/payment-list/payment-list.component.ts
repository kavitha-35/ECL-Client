import { Component, OnInit } from '@angular/core';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { RegistrationFacade } from '../../../state/registration/registration.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  public registrations             : RegistrationModel[];

  constructor(
    private readonly _router: Router,
    private readonly _registrationFacade: RegistrationFacade
  ) { }

  ngOnInit(): void {
    this._registrationFacade.registrations$.subscribe(data => {
      this.registrations = data.filter(x => x.status.name === 'Pending Payment');
    })
  }

  public async onPayBillButtonClicked($event: MouseEvent): Promise<void> {
    await this._router.navigate(['/main/payment-details']);
  }
}
