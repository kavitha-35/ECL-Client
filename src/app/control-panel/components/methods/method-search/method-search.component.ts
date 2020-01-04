import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-method-search',
  templateUrl: './method-search.component.html',
  styleUrls: ['./method-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
