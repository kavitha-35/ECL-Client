import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user/user.model';
import { Observable } from 'rxjs';
import { UsersFacade } from '../../../state/users/users.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public isLoadingData$: Observable<boolean>;
  public users$: Observable<UserModel[]>;
  public isBusy: boolean;
  public users: UserModel[];
  public displayedColumns: string[];

  constructor(private readonly _router: Router, private readonly _userFacade: UsersFacade) {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._initializeUsers();
  }

  public async onRowClicked(user: UserModel): Promise<void> {
    await this._router.navigate(['/main/user-detail'], { queryParams: { id: user.id } });
  }

  private async _initializeUsers(): Promise<void> {
    this.users$ = this._userFacade.userResults$;

    this.isBusy = true;
    await this._userFacade.loadUserResults();
    this.isBusy = false;
  }

  private _initializeDisplayedColumns(): void {
    this.displayedColumns = ['name', 'role', 'area'];
  }
}
