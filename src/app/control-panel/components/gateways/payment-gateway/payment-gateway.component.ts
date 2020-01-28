import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentGatewayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
