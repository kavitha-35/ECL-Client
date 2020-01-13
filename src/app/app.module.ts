import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { AddAppointmentComponent } from './main/components/appointments/_dialogues/add-appointment/add-appointment.component';
import { AddHomeCollectionComponent } from './main/components/home-collections/_dialogues/add-home-collection/add-home-collection.component';
import { SharedLinkTestsComponent } from './main/components/shared/_dialogues/shared-link-tests/shared-link-tests.component';
import { UpdateLogisticTrfComponent } from './main/components/logistics/_dialogues/update-logistic-trf/update-logistic-trf.component';
import { AddLogisticItemComponent } from './main/components/logistics/_dialogues/add-logistic-item/add-logistic-item.component';
import { ManageTrfComponent } from './main/components/accession/_dialogues/manage-trf/manage-trf.component';
import { AgmCoreModule } from '@agm/core';
import { AddSampleComponent } from './main/components/accession/branch-samples/_dialogues/add-sample/add-sample.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpdateOperationsComponent } from './main/components/operations/waiting-list/_dialogues/update-operations/update-operations.component';
import { AddWorksheetComponent } from './main/components/operations/work-sheets/_dialogues/add-worksheet/add-worksheet.component';
import { AddCaseComponent } from './main/components/operations/case/_dialogues/add-case/add-case.component';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { AppointmentSearchComponent } from './main/components/appointments/appointment-search/appointment-search.component';
import { HomeCollectionSearchComponent } from './main/components/home-collections/_dialogues/home-collection-search/home-collection-search.component';
import { NgPipesModule } from 'ngx-pipes';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { TemperatureControlSearchComponent } from './main/components/accession/temperature-control/temperature-control-search/temperature-control-search.component';
import { BranchSamplesSearchComponent } from './main/components/accession/branch-samples/branch-samples-search/branch-samples-search.component';
import { PendingAccessionSearchComponent } from './main/components/accession/pending-accession/pending-accession-search/pending-accession-search.component';
import { ProblemSampleNotificationSearchComponent } from './main/components/accession/problem-sample-notification/problem-sample-notification-search/problem-sample-notification-search.component';
import { ShipmentsSearchComponent } from './main/components/accession/shipments/shipments-search/shipments-search.component';
import { WaitingListDataSearchComponent } from './main/components/operations/waiting-list/waiting-list-data-search/waiting-list-data-search.component';
import { WorkSheetSearchComponent } from './main/components/operations/work-sheets/work-sheet-search/work-sheet-search.component';
import { ResultsAuthorizationDataSearchComponent } from './main/components/operations/results-authorization/results-authorization-data-search/results-authorization-data-search.component';
import { CaseSearchComponent } from './main/components/operations/case/case-search/case-search.component';
import { ExportAsService } from 'ngx-export-as';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
      backdropBorderRadius: '3px',
    }),
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'enabled', useHash: true }),
    NgPipesModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxzvfCJLrpvcSMvDbrqtNuQw9QSL6ovH4',
    }),
    FlexLayoutModule,
    PerfectScrollbarModule,
    LoginModule,
    MainModule,
    ControlPanelModule,
    NgxUiLoaderModule,
    OAuthModule.forRoot(),
  ],
  entryComponents: [
    AddAppointmentComponent,
    AddHomeCollectionComponent,
    AddLogisticItemComponent,
    SharedLinkTestsComponent,
    UpdateLogisticTrfComponent,
    AddSampleComponent,
    ManageTrfComponent,
    UpdateOperationsComponent,
    AddWorksheetComponent,
    AddCaseComponent,
    AppointmentSearchComponent,
    HomeCollectionSearchComponent,
    TemperatureControlSearchComponent,
    BranchSamplesSearchComponent,
    PendingAccessionSearchComponent,
    ProblemSampleNotificationSearchComponent,
    ShipmentsSearchComponent,
    WaitingListDataSearchComponent,
    WorkSheetSearchComponent,
    ResultsAuthorizationDataSearchComponent,
    CaseSearchComponent
  ],
  providers: [
    MatDatepickerModule,
    TranslateService,
    ExportAsService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
