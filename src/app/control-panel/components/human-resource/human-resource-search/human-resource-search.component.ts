import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-human-resource-search',
  templateUrl: './human-resource-search.component.html',
  styleUrls: ['./human-resource-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HumanResourceSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
