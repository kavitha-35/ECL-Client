import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-view-method',
  templateUrl: './view-method.component.html',
  styleUrls: ['./view-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewMethodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
