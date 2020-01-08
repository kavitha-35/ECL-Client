import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-doctor-list-search',
  templateUrl: './doctor-list-search.component.html',
  styleUrls: ['./doctor-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorListSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
