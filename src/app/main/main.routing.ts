import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { HomeCollectionComponent } from './components/home-collections/home-collection.component';
import { RegistrationComponent } from './components/registration/add-registration/registration.component';
import { LogisticReceptionComponent } from './components/logistics/logistic-reception/logistic-reception.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { EmailComponent } from './components/apps/email/email.component';
import { SocialComponent } from './components/apps/social/social.component';
import { BulkRegistrationComponent } from './components/registration/bulk-registration/bulk-registration.component';
import { RegistrationListComponent } from './components/registration/registration-list/registration-list.component';
import { LogisticMessengerComponent } from './components/logistics/logistic-messenger/logistic-messenger.component';
import { TemperatureControlComponent } from './components/accession/temperature-control/temperature-control.component';
import { HomeDashboardComponent } from './components/dashboards/home-dashboard/home-dashboard.component';
import { BranchSamplesComponent } from './components/accession/branch-samples/branch-samples.component';
import { SampleMappingComponent } from './components/accession/sample-mapping/sample-mapping.component';
import { PendingAccessionComponent } from './components/accession/pending-accession/pending-accession.component';
import { CustomerFeedbackComponent } from './components/registration/customer-feedback/customer-feedback.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { AdditionalTestsComponent } from './components/registration/additional-tests/additional-tests.component';
import { ReportsComponent } from './components/registration/reports/reports.component';
import { HomeCollectionDetailsComponent } from './components/home-collections/home-collection-details/home-collection-details.component';
import { AppointmentDetailsComponent } from './components/appointments/appointment-details/appointment-details.component';
import { SharedRegistrationDetailsComponent } from './components/shared/shared-registration-details/shared-registration-details.component';
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { ProblemSampleNotificationComponent } from './components/accession/problem-sample-notification/problem-sample-notification.component';
import { ShipmentsComponent } from './components/accession/shipments/shipments.component';
import { OperationsHomeComponent } from './components/operations/operations-home/operations-home.component';
import { WaitingListComponent } from './components/operations/waiting-list/waiting-list.component';
import { WorkSheetsComponent } from './components/operations/work-sheets/work-sheets.component';
import { ResultsAuthorizationComponent } from './components/operations/results-authorization/results-authorization.component';
import { CaseComponent } from './components/operations/case/case.component';
import { InvoiceComponent } from './components/finance/invoice/invoice.component';
import { GoogleComponent } from './components/maps/google/google.component';
import { LeafletComponent } from './components/maps/leaflet/leaflet.component';
import { AboutUsComponent } from './components/my-pages/about-us/about-us.component';
import { ContactUsComponent } from './components/my-pages/contact-us/contact-us.component';
import { SendMessageComponent } from './components/my-pages/send-message/send-message.component';
import { RequestFormsComponent } from './components/download-center/request-forms/request-forms.component';
import { BrochuresComponent } from './components/download-center/brochures/brochures.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { RegistrationsComponent } from './components/registrations/registrations.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'patient',
        component: RegistrationComponent,
      },
      {
        path: 'branch-samples',
        component: BranchSamplesComponent,
      },
      {
        path: 'registration-details',
        component: SharedRegistrationDetailsComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'send-message',
        component: SendMessageComponent
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'problem-sample-notification',
        component: ProblemSampleNotificationComponent,
      },
      {
        path: 'operations-home',
        component: OperationsHomeComponent,
      },
      {
        path: 'request-forms',
        component: RequestFormsComponent,
      },
      {
        path: 'brochures',
        component: BrochuresComponent,
      },
      {
        path: 'waiting-list',
        component: WaitingListComponent,
      },
      {
        path: 'worksheets',
        component: WorkSheetsComponent,
      },
      {
        path: 'google',
        component: GoogleComponent
      },
      {
        path: 'leaflet',
        component: LeafletComponent
      },
      {
        path: 'case',
        component: CaseComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        path: 'results-authorization',
        component: ResultsAuthorizationComponent,
      },
      {
        path: 'shipments',
        component: ShipmentsComponent,
      },
      {
        path: 'sample-mapping',
        component: SampleMappingComponent,
      },
      {
        path: 'bulk-registration',
        component: BulkRegistrationComponent,
      },
      {
        path: 'pending-accession',
        component: PendingAccessionComponent,
      },
      {
        path: 'book-appointment',
        component: AppointmentsComponent,
      },
      {
        path: 'registration-list',
        component: RegistrationListComponent,
      },
      {
        path: 'additional-tests',
        component: AdditionalTestsComponent,
      },
      {
        path: 'customer-feedback',
        component: CustomerFeedbackComponent,
      },
      {
        component: HomeCollectionComponent,
        path: 'home-collection',
      },
      {
        component: HomeCollectionDetailsComponent,
        path: 'home-collection-details',
      },
      {
        component: AppointmentDetailsComponent,
        path: 'appointment-details',
      },
      {
        path: 'temperature-control',
        component: TemperatureControlComponent,
      },
      {
        path: 'add-payment',
        component: AddPaymentComponent,
      },
      {
        path: 'payment-list',
        component: PaymentListComponent,
      },
      {
        path: 'registrations',
        component: RegistrationsComponent,
      },
      {
        path: 'payment-details',
        component: PaymentDetailsComponent,
      },
      {
        component: CalendarComponent,
        path: 'calendar',
      },
      {
        component: EmailComponent,
        path: 'email',
      },
      {
        path: 'logistics-reception',
        component: LogisticReceptionComponent,
      },
      {
        path: 'logistics-messenger',
        component: LogisticMessengerComponent,
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'social',
        component: SocialComponent,
      },
      {
        path: 'user-list',
        component: UserListComponent,
      },
      {
        path: 'user-detail',
        component: UserDetailComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: '',
        component: HomeDashboardComponent,
      },
    ],
  },
];

export const MainRouting: ModuleWithProviders = RouterModule.forChild(routes);
