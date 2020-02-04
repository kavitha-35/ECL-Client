import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-creditnotes-list',
  templateUrl: './creditnotes-list.component.html',
  styleUrls: ['./creditnotes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditnotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
