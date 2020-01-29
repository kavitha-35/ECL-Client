import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';

import { filter } from 'rxjs/operators';

import { MenuItems } from './config/menu-items';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AuthenticationService } from 'app/shared/authentication/services/authentication.services';
import { LoaderService } from './services/loader.service';
import { Menu } from './models/menu/menu';
import PerfectScrollbar from 'perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RegistrationFacade } from './state/registration/registration.facade';
import { TestsFacade } from './state/tests/tests.facade';
import { AppointmentFacade } from './state/appointments/appointment.facade';
import { HomeCollectionFacade } from './state/home-collection/home-collection.facade';
import { LogisticsFacade } from './state/logistics/logistics.facade';
import { UsersFacade } from './state/users/users.facade';

@Component({
  templateUrl: 'main.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy {
  url                 : string;
  collapseSidebar     : boolean;
  public menuItems    : Menu[];
  menuLayout          : any = 'vertical-menu';
  selectedSidebarImage: any = 'bg-1';
  selectedSidebarColor: any = 'sidebar-default';
  selectedHeaderColor : any = 'header-default';
  collapsedClass      : any = 'side-panel-opened';

  @ViewChild('sidemenu', { static: true }) sideMenu;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    private readonly router: Router,
    public applicationMenuItem: MenuItems,
    public readonly loaderService: LoaderService,
    private readonly authentication: AuthenticationService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly _registrationFacade: RegistrationFacade,
    private readonly _testsFacade: TestsFacade,
    private readonly _appointmentFacade: AppointmentFacade,
    private readonly _homeCollectionFacade: HomeCollectionFacade,
    private readonly _logiscticsFacade: LogisticsFacade,
    private readonly _userFacade: UsersFacade,
  ) { }

  ngOnInit(): void {
    this._registrationFacade.loadRegistrations();
    this._testsFacade.loadLinkSearchResults();
    this._appointmentFacade.loadAppointments();
    this._homeCollectionFacade.loadHomeCollections('1');
    this._logiscticsFacade.loadLogistics();
    this._userFacade.loadUserResults();

    this.menuItems = this.applicationMenuItem.getAll();
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');
    if (window.matchMedia(`(min-width: 960px)`).matches) {
      const ps = new PerfectScrollbar(elemSidebar, {
        wheelSpeed: 2,
        suppressScrollX: true,
      });
    }
    this.router.events
      .pipe(untilDestroyed(this))
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url = event.url;
        if (this.isOver()) {
          this.sideMenu.close();
        }
      });
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');
    setTimeout(() => {
      if (window.matchMedia(`(min-width: 960px)`).matches) {
        const ps = new PerfectScrollbar(elemSidebar, {
          wheelSpeed: 2,
          suppressScrollX: true,
        });
      }
    }, 350);
  }

  ngOnDestroy(): void { }

  public isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  public menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sideMenu.mode = 'over';
    }
  }

  public logout(): void {
    this.authentication.logout();
  }

  public menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sideMenu.mode = 'side';
    }
  }
}
