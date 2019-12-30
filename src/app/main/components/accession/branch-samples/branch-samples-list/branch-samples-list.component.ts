import { Component, OnInit, Input } from '@angular/core';
import { SampleModel } from 'app/main/models/samples/sample.model';

@Component({
  selector: 'app-branch-samples-list',
  templateUrl: './branch-samples-list.component.html',
  styleUrls: ['./branch-samples-list.component.scss']
})
export class BranchSamplesListComponent implements OnInit {
  @Input() public sampleModels: SampleModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
