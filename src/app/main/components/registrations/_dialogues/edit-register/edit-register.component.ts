import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
