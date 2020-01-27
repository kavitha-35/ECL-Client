import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClinicHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
