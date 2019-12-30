import { Component, OnInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Menu } from './models/menu/menu';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router, NavigationEnd } from '@angular/router';
import { ControlPanelMenu } from './config/control-panel-menu';
import { LoaderService } from './services/loader.service';
import { AuthenticationService } from 'app/shared/authentication/services/authentication.services';
import PerfectScrollbar from 'perfect-scrollbar';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './control-panel.component.html',
})
export class ControlPanelComponent implements OnInit, OnDestroy {
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
    public controlPanelMenuItem: ControlPanelMenu,
    public readonly loaderService: LoaderService,
    private readonly authentication: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.menuItems = this.controlPanelMenuItem.getAll();
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

