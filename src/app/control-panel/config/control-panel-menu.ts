import { Injectable } from '@angular/core';
import { Menu } from '../models/menu/menu';

const MENUITEMS: Menu[] = [
  {
    state: 'outsourcing',
    name: 'Outsourcing Management',
    type: 'link',
    icon: 'apps',
  },

  {
    state: 'testmaster',
    name: 'Test Masters',
    type: 'sub',
    icon: 'streetview',
    children: [
      { state: 'individual-test', name: 'Individual Test' },
      { state: 'combined-test', name: 'Combine Test' },
      { state: 'profile-test', name: 'Profile Test' },
    ],
  },
  {
    state: 'organisation',
    name: 'Organisation',
    type: 'sub',
    icon: 'home_work',
    children: [
      { state: 'organisation', name: 'Add Organisation' },
      { state: 'doctor', name: 'Add Doctor' },
    ],
  },
  {
    state: 'department',
    name: 'Department',
    type: 'link',
    icon: 'polymer',
  },
  {
    state: 'method',
    name: 'Method',
    type: 'link',
    icon: 'play_for_work',
  },
  {
    state: 'not-found',
    name: 'Test Result Calculation',
    type: 'link',
    icon: 'offline_pin',
    paramValue: 'Test Result Calculation'
  },
  {
    state: 'humanresource',
    name: 'Human Resources',
    type: 'sub',
    icon: 'rate_review',
    children: [
      { state: 'human-resource', name: 'Add Employee' },
      { state: 'not-found', name: 'User Privilage', paramValue: 'User Privileage' },
    ],
  },
  {
    state: 'salesbudget',
    name: 'Sales Budget',
    type: 'sub',
    icon: 'timeline',
    children: [
      { state: 'not-found', name: 'Add Monthy Budget', paramValue: 'Monthly Budget' },
      { state: 'not-found', name: 'Add Sales Representative Budget', paramValue: 'Sales Representative' },
    ],
  },
  {
    state: 'equipment',
    name: 'Equipment',
    type: 'link',
    icon: 'attach_money',
  },
  {
    state: 'comment',
    name: 'Comments',
    type: 'link',
    icon: 'map',
  },
  {
    state: 'report-format',
    name: 'Report Format',
    type: 'link',
    icon: 'get_app',
  },
  {
    state: 'not-found',
    name: 'Coupons Management',
    type: 'link',
    paramValue: 'Coupon',
    icon: 'storefront',
  },
  {
    state: 'not-found',
    name: 'Promotion Corner',
    type: 'link',
    paramValue: 'Promotion',
    icon: 'supervised_user_circle',
  },
  {
    state: 'gateways',
    name: 'Gateways',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'not-found', name: 'Payment Gateway', paramValue: 'Payment Gateway' },
      { state: 'not-found', name: 'Email Gateways', paramValue: 'Email GateWay' },
      { state: 'not-found', name: 'SMS Gateway', paramValue: 'SMS Gateway' },
      { state: 'not-found', name: 'Whatsapp Gateways', paramValue: 'WhatsaApp Gateway' },
    ],
  },
  {
    state: 'not-found',
    name: 'News',
    type: 'link',
    paramValue: 'News',
    icon: 'pages',
  },
];

@Injectable()
export class ControlPanelMenu {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu): void {
    MENUITEMS.push(menu);
  }
}
