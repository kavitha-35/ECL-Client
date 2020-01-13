import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  title: string;
  constructor(private readonly _activatedRoute: ActivatedRoute,
    private readonly cRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.title = queryParams['action'];
      this.cRef.detectChanges();
    });
  }
}
