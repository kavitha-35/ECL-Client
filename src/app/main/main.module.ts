import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuItems } from './config/menu-items';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { PatientPersonalInformationComponent } from './components/registration/add-registration/patient-personal-information/patient-personal-information.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientServices } from './services/patient.services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxLoadingModule } from 'ngx-loading';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddHomeCollectionComponent } from './components/home-collections/_dialogues/add-home-collection/add-home-collection.component';
import { HomeCollectionComponent } from './components/home-collections/home-collection.component';
import { HomeCollectionTableComponent } from './components/home-collections/home-collection-table/home-collection-table.component';
import { AddAppointmentComponent } from './components/appointments/_dialogues/add-appointment/add-appointment.component';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { EmailComponent } from './components/apps/email/email.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { SocialComponent } from './components/apps/social/social.component';
import { RegistrationComponent } from './components/registration/add-registration/registration.component';
import { AppointmentTableComponent } from './components/appointments/appointment-table/appointment-table.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { LogisticReceptionComponent } from './components/logistics/logistic-reception/logistic-reception.component';
import { AddLogisticItemComponent } from './components/logistics/_dialogues/add-logistic-item/add-logistic-item.component';
import { LogisticListComponent } from './components/logistics/logistic-list/logistic-list.component';
import { SharedLinkTestsComponent } from './components/shared/_dialogues/shared-link-tests/shared-link-tests.component';
import { PatientReferralInformationComponent } from './components/registration/add-registration/patient-referral-information/patient-referral-information.component';
import { PatientTestsInformationComponent } from './components/registration/add-registration/patient-tests-information/patient-tests-information.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PatientVerificationComponent } from './components/registration/add-registration/patient-verification/patient-verification.component';
import { NgChatModule } from 'ng-chat';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule } from '@angular/material';
import { BulkRegistrationComponent } from './components/registration/bulk-registration/bulk-registration.component';
import { RegistrationListComponent } from './components/registration/registration-list/registration-list.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LogisticMessengerComponent } from './components/logistics/logistic-messenger/logistic-messenger.component';
import { UpdateLogisticTrfComponent } from './components/logistics/_dialogues/update-logistic-trf/update-logistic-trf.component';
import { TemperatureControlComponent } from './components/accession/temperature-control/temperature-control.component';
import { HomeDashboardComponent } from './components/dashboards/home-dashboard/home-dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { ManageTrfComponent } from './components/accession/_dialogues/manage-trf/manage-trf.component';
import { PatientFeedbackSurveyComponent } from './components/dashboards/home-dashboard/surveys/patient-feedback-survey/patient-feedback-survey.component';
import { AccountFeedbackSurveyComponent } from './components/dashboards/home-dashboard/surveys/account-feedback-survey/account-feedback-survey.component';
import { BranchSamplesComponent } from './components/accession/branch-samples/branch-samples.component';
import { BranchSampleTableComponent } from './components/accession/branch-samples/branch-sample-table/branch-sample-table.component';
import { AddSampleComponent } from './components/accession/branch-samples/_dialogues/add-sample/add-sample.component';
import { SampleMappingComponent } from './components/accession/sample-mapping/sample-mapping.component';
import { PendingAccessionComponent } from './components/accession/pending-accession/pending-accession.component';
import { PendingAccessionTableComponent } from './components/accession/pending-accession/pending-accession-table/pending-accession-table.component';
import { CustomerFeedbackComponent } from './components/registration/customer-feedback/customer-feedback.component';
import { AppoinmentRegistrationFeedbackComponent } from './components/registration/customer-feedback/_dialogues/appoinment-registration-feedback/appoinment-registration-feedback.component';
import { OurPeopleComponent } from './components/registration/customer-feedback/_dialogues/our-people/our-people.component';
import { OurServiceComponent } from './components/registration/customer-feedback/_dialogues/our-service/our-service.component';
import { OverallSatisfactionComponent } from './components/registration/customer-feedback/_dialogues/overall-satisfaction/overall-satisfaction.component';
import { ServiceComponent } from './components/registration/customer-feedback/_dialogues/service/service.component';
import { ContactDetailsComponent } from './components/registration/customer-feedback/_dialogues/contact-details/contact-details.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { AdditionalTestsComponent } from './components/registration/additional-tests/additional-tests.component';
import { SearchPatientVisitComponent } from './components/registration/additional-tests/search-patient-visit/search-patient-visit.component';
import { AppointmentsCollectionListComponent } from './components/registration/additional-tests/appointments-collection-list/appointments-collection-list.component';
import { ReportsComponent } from './components/registration/reports/reports.component';
import { SearchVisitComponent } from './components/payment/add-payment/search-visit/search-visit.component';
import { VisitDetailsComponent } from './components/payment/add-payment/visit-details/visit-details.component';
import { VisitTestCollectionListComponent } from './components/payment/add-payment/visit-details/visit-test-collection-list/visit-test-collection-list.component';
import { VisitDetailsInformationComponent } from './components/payment/add-payment/visit-details/visit-details-information/visit-details-information.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { HomeCollectionFacade } from './state/home-collection/home-collection.facade';
import { HomeCollectionDetailsComponent } from './components/home-collections/home-collection-details/home-collection-details.component';
import { AppointmentFacade } from './state/appointments/appointment.facade';
import { AppointmentDetailsComponent } from './components/appointments/appointment-details/appointment-details.component';
import { LogisticsFacade } from './state/logistics/logistics.facade';
import { A11yModule } from '@angular/cdk/a11y';
import { TestsFacade } from './state/tests/tests.facade';
import { SharedLinkTestsListComponent } from './components/shared/shared-link-tests-list/shared-link-tests-list.component';
import { RegistrationFacade } from './state/registration/registration.facade';
import { UsersFacade } from './state/users/users.facade';
import { SharedRegistrationListComponent } from './components/shared/shared-registration-list/shared-registration-list.component';
import { SharedRegistrationDetailsComponent } from './components/shared/shared-registration-details/shared-registration-details.component';
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { ProblemSampleNotificationComponent } from './components/accession/problem-sample-notification/problem-sample-notification.component';
import { ShipmentsComponent } from './components/accession/shipments/shipments.component';
import { ProblemSampleNotificationTableComponent } from './components/accession/problem-sample-notification/problem-sample-notification-table/problem-sample-notification-table.component';
import { OperationsHomeComponent } from './components/operations/operations-home/operations-home.component';
import { WaitingListComponent } from './components/operations/waiting-list/waiting-list.component';
import { WaitingListTableComponent } from './components/operations/waiting-list/waiting-list-table/waiting-list-table.component';
import { UpdateOperationsComponent } from './components/operations/waiting-list/_dialogues/update-operations/update-operations.component';
import { WorkSheetsComponent } from './components/operations/work-sheets/work-sheets.component';
import { WorkSheetsTableComponent } from './components/operations/work-sheets/work-sheets-table/work-sheets-table.component';
import { AddWorksheetComponent } from './components/operations/work-sheets/_dialogues/add-worksheet/add-worksheet.component';
import { ResultsAuthorizationComponent } from './components/operations/results-authorization/results-authorization.component';
import { CaseComponent } from './components/operations/case/case.component';
import { CaseTableComponent } from './components/operations/case/case-table/case-table.component';
import { AddCaseComponent } from './components/operations/case/_dialogues/add-case/add-case.component';
import { InvoiceComponent } from './components/finance/invoice/invoice.component';
import { InvoiceListComponent } from './components/finance/invoice/invoice-list/invoice-list.component';
import { GoogleComponent } from './components/maps/google/google.component';
import { LeafletComponent } from './components/maps/leaflet/leaflet.component';
import { AboutUsComponent } from './components/my-pages/about-us/about-us.component';
import { ContactUsComponent } from './components/my-pages/contact-us/contact-us.component';
import { SendMessageComponent } from './components/my-pages/send-message/send-message.component';
import { StatSamplesComponent } from './components/operations/operations-home/_partials/stat-samples/stat-samples.component';
import { CasesComponent } from './components/operations/operations-home/_partials/cases/cases.component';
import { SampleChartComponent } from './components/operations/operations-home/_partials/sample-chart/sample-chart.component';
import { ChartsModule } from 'ng2-charts';
import { RequestFormsComponent } from './components/download-center/request-forms/request-forms.component';
import { BrochuresComponent } from './components/download-center/brochures/brochures.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppointmentRibbonMenuComponent } from './components/appointments/appointment-ribbon-menu/appointment-ribbon-menu.component';
import { HomeCollectionRibbonMenuComponent } from './components/home-collections/home-collection-ribbon-menu/home-collection-ribbon-menu.component';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { HomeCollectionListComponent } from './components/home-collections/home-collection-list/home-collection-list.component';
import { AppointmentSearchComponent } from './components/appointments/appointment-search/appointment-search.component';
import { HomeCollectionSearchComponent } from './components/home-collections/_dialogues/home-collection-search/home-collection-search.component';
import { TemperatureControlSearchComponent } from './components/accession/temperature-control/temperature-control-search/temperature-control-search.component';
import { TemperatureControlListComponent } from './components/accession/temperature-control/temperature-control-list/temperature-control-list.component';
import { TemperatureControlRibbonMenuComponent } from './components/accession/temperature-control/temperature-control-ribbon-menu/temperature-control-ribbon-menu.component';
import { TemperatureControlTableComponent } from './components/accession/temperature-control/temperature-control-table/temperature-control-table.component';
import { BranchSamplesRibbonMenuComponent } from './components/accession/branch-samples/branch-samples-ribbon-menu/branch-samples-ribbon-menu.component';
import { BranchSamplesSearchComponent } from './components/accession/branch-samples/branch-samples-search/branch-samples-search.component';
import { BranchSamplesListComponent } from './components/accession/branch-samples/branch-samples-list/branch-samples-list.component';
import { PendingAccessionRibbonMenuComponent } from './components/accession/pending-accession/pending-accession-ribbon-menu/pending-accession-ribbon-menu.component';
import { PendingAccessionSearchComponent } from './components/accession/pending-accession/pending-accession-search/pending-accession-search.component';
import { PendingAccessionListComponent } from './components/accession/pending-accession/pending-accession-list/pending-accession-list.component';
import { InsuranceDetailsComponent } from './components/registration/add-registration/insurance-details/insurance-details.component';
import { LinkTestComponent } from './components/registration/add-registration/link-test/link-test.component';
import { RegistrationTableComponent } from './components/registration/registration-table/registration-table.component';
import { ProblemSampleNotificationSearchComponent } from './components/accession/problem-sample-notification/problem-sample-notification-search/problem-sample-notification-search.component';
import { ProblemSampleNotificationRibbonMenuComponent } from './components/accession/problem-sample-notification/problem-sample-notification-ribbon-menu/problem-sample-notification-ribbon-menu.component';
import { ProblemSampleNotificationDataListComponent } from './components/accession/problem-sample-notification/problem-sample-notification-data-list/problem-sample-notification-data-list.component';
import { ShipmentsTableComponent } from './components/accession/shipments/shipments-table/shipments-table.component';
import { ShipmentsListComponent } from './components/accession/shipments/shipments-list/shipments-list.component';
import { ShipmentsRibbonMenuComponent } from './components/accession/shipments/shipments-ribbon-menu/shipments-ribbon-menu.component';
import { ShipmentsSearchComponent } from './components/accession/shipments/shipments-search/shipments-search.component';
import { WaitingListDataListComponent } from './components/operations/waiting-list/waiting-list-data-list/waiting-list-data-list.component';
import { WaitingListRibbonMenuComponent } from './components/operations/waiting-list/waiting-list-ribbon-menu/waiting-list-ribbon-menu.component';
import { WaitingListDataSearchComponent } from './components/operations/waiting-list/waiting-list-data-search/waiting-list-data-search.component';
import { WorksheetListComponent } from './components/operations/work-sheets/worksheet-list/worksheet-list.component';
import { WorkSheetRibbonMenuComponent } from './components/operations/work-sheets/work-sheet-ribbon-menu/work-sheet-ribbon-menu.component';
import { WorkSheetSearchComponent } from './components/operations/work-sheets/work-sheet-search/work-sheet-search.component';
import { ResultsAuthorizationRibbonMenuComponent } from './components/operations/results-authorization/results-authorization-ribbon-menu/results-authorization-ribbon-menu.component';
import { ResultsAuthorizationDataSearchComponent } from './components/operations/results-authorization/results-authorization-data-search/results-authorization-data-search.component';
import { ResultsAuthorizationDataListComponent } from './components/operations/results-authorization/results-authorization-data-list/results-authorization-data-list.component';
import { CaseDataListComponent } from './components/operations/case/case-data-list/case-data-list.component';
import { CaseRibbonMenuComponent } from './components/operations/case/case-ribbon-menu/case-ribbon-menu.component';
import { CaseSearchComponent } from './components/operations/case/case-search/case-search.component';
import { ClinicHistoryComponent } from './components/registration/add-registration/clinic-history/clinic-history.component';
import { EditAppointmentComponent } from './components/appointments/_dialogues/edit-appointment/edit-appointment.component';
import { PatientAddressComponent } from './components/registration/add-registration/patient-address/patient-address.component';
import { PatientSocialmediaComponent } from './components/registration/add-registration/patient-socialmedia/patient-socialmedia.component';

@NgModule({
  declarations: [
    MainComponent,
    PatientPersonalInformationComponent,
    AddAppointmentComponent,
    PatientReferralInformationComponent,
    PatientTestsInformationComponent,
    LogisticReceptionComponent,
    AddLogisticItemComponent,
    LogisticListComponent,
    RegistrationListComponent,
    SharedLinkTestsComponent,
    AddSampleComponent,
    NotFoundComponent,
    CalendarComponent,
    EmailComponent,
    RegistrationComponent,
    AppointmentTableComponent,
    AppointmentsComponent,
    ChatComponent,
    SocialComponent,
    AddHomeCollectionComponent,
    HomeCollectionComponent,
    HomeCollectionTableComponent,
    PatientVerificationComponent,
    BulkRegistrationComponent,
    RegistrationListComponent,
    UpdateLogisticTrfComponent,
    LogisticMessengerComponent,
    TemperatureControlComponent,
    HomeDashboardComponent,
    ManageTrfComponent,
    PatientFeedbackSurveyComponent,
    AccountFeedbackSurveyComponent,
    BranchSamplesComponent,
    BranchSampleTableComponent,
    SampleMappingComponent,
    PendingAccessionComponent,
    PendingAccessionListComponent,
    CustomerFeedbackComponent,
    AppoinmentRegistrationFeedbackComponent,
    OurPeopleComponent,
    OurServiceComponent,
    OverallSatisfactionComponent,
    ServiceComponent,
    ContactDetailsComponent,
    AddPaymentComponent,
    PaymentListComponent,
    AdditionalTestsComponent,
    SearchPatientVisitComponent,
    AppointmentsCollectionListComponent,
    ReportsComponent,
    SearchVisitComponent,
    VisitDetailsComponent,
    VisitTestCollectionListComponent,
    VisitDetailsInformationComponent,
    HomeCollectionDetailsComponent,
    AppointmentDetailsComponent,
    SharedLinkTestsListComponent,
    SharedRegistrationListComponent,
    SharedRegistrationDetailsComponent,
    PaymentDetailsComponent,
    ProblemSampleNotificationComponent,
    ShipmentsComponent,
    ProblemSampleNotificationTableComponent,
    ShipmentsTableComponent,
    OperationsHomeComponent,
    WaitingListComponent,
    WaitingListTableComponent,
    UpdateOperationsComponent,
    WorkSheetsComponent,
    WorkSheetsTableComponent,
    AddWorksheetComponent,
    ResultsAuthorizationComponent,
    CaseComponent,
    CaseTableComponent,
    AddCaseComponent,
    InvoiceComponent,
    InvoiceListComponent,
    GoogleComponent,
    LeafletComponent,
    AboutUsComponent,
    ContactUsComponent,
    SendMessageComponent,
    StatSamplesComponent,
    CasesComponent,
    SampleChartComponent,
    RequestFormsComponent,
    BrochuresComponent,
    UserListComponent,
    UserDetailComponent,
    AppointmentRibbonMenuComponent,
    HomeCollectionRibbonMenuComponent,
    AppointmentListComponent,
    HomeCollectionListComponent,
    AppointmentSearchComponent,
    HomeCollectionSearchComponent,
    TemperatureControlSearchComponent,
    TemperatureControlListComponent,
    TemperatureControlRibbonMenuComponent,
    TemperatureControlTableComponent,
    BranchSamplesRibbonMenuComponent,
    BranchSamplesSearchComponent,
    BranchSamplesListComponent,
    PendingAccessionRibbonMenuComponent,
    PendingAccessionSearchComponent,
    PendingAccessionTableComponent,
    InsuranceDetailsComponent,
    LinkTestComponent,
    RegistrationTableComponent,
    ProblemSampleNotificationSearchComponent,
    ProblemSampleNotificationRibbonMenuComponent,
    ProblemSampleNotificationDataListComponent,
    ShipmentsListComponent,
    ShipmentsRibbonMenuComponent,
    ShipmentsSearchComponent,
    WaitingListDataListComponent,
    WaitingListRibbonMenuComponent,
    WaitingListDataSearchComponent,
    WorksheetListComponent,
    WorkSheetRibbonMenuComponent,
    WorkSheetSearchComponent,
    ResultsAuthorizationRibbonMenuComponent,
    ResultsAuthorizationDataSearchComponent,
    ResultsAuthorizationDataListComponent,
    CaseDataListComponent,
    CaseRibbonMenuComponent,
    CaseSearchComponent,
    ClinicHistoryComponent,
    PatientAddressComponent,
    PatientSocialmediaComponent,
    EditAppointmentComponent
  ],
  providers: [
    DatePipe,
    MenuItems,
    MatDatepickerModule,
    PatientServices,
    HomeCollectionFacade,
    AppointmentFacade,
    LogisticsFacade,
    TestsFacade,
    RegistrationFacade,
    UsersFacade,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    TranslateModule,
    PerfectScrollbarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    FormsModule,
    MatProgressBarModule,
    NgChatModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MainRouting,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    NgxLoadingModule,
    MatStepperModule,
    MatChipsModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule,
    StoreModule.forFeature('main', reducers),
    A11yModule,
  ],
  exports: [
    RouterModule,
    PatientReferralInformationComponent,
    PatientTestsInformationComponent,
    PatientVerificationComponent,
    TemperatureControlTableComponent,
    PendingAccessionSearchComponent,
    PendingAccessionListComponent,
  ],
  entryComponents: [],
})
export class MainModule {}
