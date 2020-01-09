import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ControlPanelComponent } from './control-panel.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { RefernceRangeComponent } from './components/refernce-range/refernce-range.component';
import { OutsourcingManagementComponent } from './components/outsourcing-management/outsourcing-management.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { CombinedTestComponent } from './components/test-masters/combined-test/combined-test.component';
import { IndividualTestComponent } from './components/test-masters/individual-test/individual-test.component';
import { ProfileTestComponent } from './components/test-masters/profile-test/profile-test.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeDashboardComponent } from './components/dashboards/home-dashboard/home-dashboard.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { OrganisationPriceListComponent } from './components/organisation-price-list/organisation-price-list.component';
import { HumanResourceComponent } from './components/human-resource/human-resource.component';
import { MethodsComponent } from './components/methods/methods.component';
import { DepartmentComponent } from './components/department/department.component';

export const routes: Routes = [
  {
    path: 'control-panel',
    component: ControlPanelComponent,
    children: [
      {
        path: 'equipment',
        component: EquipmentComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
      {
        path: 'reference-range',
        component: RefernceRangeComponent,
      },
      {
        path: 'organisation-price-list',
        component: OrganisationPriceListComponent,
      },
      {
        path: 'outsourcing',
        component: OutsourcingManagementComponent,
      },
      {
        path: 'doctor',
        component: DoctorComponent,
      },
      {
        path: 'organisation',
        component: OrganizationComponent,
      },
      {
        path: 'combined-test',
        component: CombinedTestComponent,
      },
      {
        path: 'method',
        component: MethodsComponent,
      },
      {
        path: 'individual-test',
        component: IndividualTestComponent,
      },
      {
        path: 'profile-test',
        component: ProfileTestComponent,
      },
      {
        path: 'human-resource',
        component: HumanResourceComponent,
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

export const ControlPanelRouting: ModuleWithProviders = RouterModule.forChild(routes);
