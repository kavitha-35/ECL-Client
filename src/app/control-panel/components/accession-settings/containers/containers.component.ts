import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
