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
      { state: 'organisation-price-list', name: 'Add Organisation Price List' },
      { state: 'not-found', name: 'Organisation List' },
    ],
  },
  {
    state: 'department',
    name: 'Department',
    type: 'link',
    icon: 'polymer',
  },
  {
    state: 'reference-range',
    name: 'Reference Range',
    type: 'link',
    icon: 'payment',
  },
  {
    state: 'testresult',
    name: 'Test Result Calculation',
    type: 'sub',
    icon: 'offline_pin',
    children: [
      { state: 'not-found', name: 'Add Test Result Calculation', paramValue: 'Test Result Calculation'},
      { state: 'not-found', name: 'Test Result Calculation List', paramValue: 'Test Result Calculation'},
    ],
  },
  {
    state: 'humanresource',
    name: 'Human Resources',
    type: 'sub',
    icon: 'rate_review',
    children: [
      { state: 'human-resource', name: 'Add Employee' },
      { state: 'human-resource', name: 'Employee List' },
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
    state: 'comments',
    name: 'Comments',
    type: 'sub',
    icon: 'map',
    children: [
      { state: 'not-found', name: 'Add Comments', paramValue: 'Comment' },
      { state: 'not-found', name: 'Comments List', paramValue: 'Comment' },
    ],
  },
  {
    state: 'report-format',
    name: 'Report Format',
    type: 'link',
    icon: 'get_app',
  },
  {
    state: 'coupons',
    name: 'Coupons Management',
    type: 'sub',
    icon: 'storefront',
    children: [
      { state: 'not-found', name: 'Add Coupon', paramValue: 'Coupon' },
      { state: 'not-found', name: 'Coupon Management List', paramValue: 'Coupon Management' },
      { state: 'not-found', name: 'Cart', paramValue: 'Cart' },
      { state: 'not-found', name: 'Checkout', paramValue: 'Checkout' },
    ],
  },
  {
    state: 'promotion',
    name: 'Promotion Corner',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      { state: 'not-found', name: 'Add Promotion', paramValue: 'Promotion' },
      { state: 'not-found', name: 'Promotion Corner List', paramValue: 'Promotion' },
    ],
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
    state: 'news',
    name: 'News',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'not-found', name: 'Add News', paramValue: 'News' },
      { state: 'not-found', name: 'News List', paramValue: 'News' },
    ],
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
