import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../../state/users/users.facade';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../../models/user/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public userDetail: UserModel;

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _userFacade: UsersFacade) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((query) => {
      const userId = query['id'];
      this._userFacade.userResults$.subscribe((data) => {
        this.userDetail = data.find((x) => x.id.toString() === userId.toString());
      });
    });
  }
}
