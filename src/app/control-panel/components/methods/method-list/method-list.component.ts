import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodListComponent implements OnInit {
  @Input() method: MethodListComponent[];
  constructor() {}

  ngOnInit(): void {}
}
