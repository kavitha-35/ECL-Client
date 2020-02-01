import { Component, OnInit } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';

@Component({
  selector: 'app-add-profile-test',
  templateUrl: './add-profile-test.component.html',
  styleUrls: ['./add-profile-test.component.scss']
})
export class AddProfileTestComponent implements OnInit {
  public testprofile: ProfileTestModel;
  constructor() { }

  ngOnInit(): void {
  }

}
