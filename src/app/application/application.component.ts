import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatGridListModule } from '@angular/material';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
