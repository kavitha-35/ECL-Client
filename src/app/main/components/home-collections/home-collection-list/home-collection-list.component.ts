import { Component, OnInit, Input } from '@angular/core';
import { HomeCollectionModel } from 'app/main/models/home-collections/home-collection.model';

@Component({
  selector: 'app-home-collection-list',
  templateUrl: './home-collection-list.component.html',
  styleUrls: ['./home-collection-list.component.scss']
})
export class HomeCollectionListComponent {
  @Input() public homeCollections      : HomeCollectionModel[];

}
