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
    type: 'sub',
    icon: 'polymer',
    children: [{ state: 'not-found', name: 'Add Department' }, { state: 'not-found', name: 'Department List' }],
  },
  {
    state: 'method',
    name: 'Method',
    type: 'link',
    icon: 'supervised_user_circle',
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
      { state: 'not-found', name: 'Add Test Result Calculation' },
      { state: 'not-found', name: 'Test Result Calculation List' },
    ],
  },
  {
    state: 'humanresource',
    name: 'Human Resources',
    type: 'sub',
    icon: 'rate_review',
    children: [
      { state: 'not-found', name: 'Add Employee' },
      { state: 'not-found', name: 'Employee List' },
      { state: 'not-found', name: 'User Privilage' },
    ],
  },
  {
    state: 'salesbudget',
    name: 'Sales Budget',
    type: 'sub',
    icon: 'timeline',
    children: [
      { state: 'not-found', name: 'Add Monthy Budget' },
      { state: 'not-found', name: 'Add Sales Representative Budget' },
      { state: 'not-found', name: 'List' },
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
    children: [{ state: 'not-found', name: 'Add Comments' }, { state: 'not-found', name: 'Comments List' }],
  },
  {
    state: 'format',
    name: 'Format',
    type: 'sub',
    icon: 'get_app',
    children: [{ state: 'not-found', name: 'Add Format' }, { state: 'not-found', name: 'Format List' }],
  },
  {
    state: 'coupons',
    name: 'Coupons Management',
    type: 'sub',
    icon: 'storefront',
    children: [
      { state: 'not-found', name: 'Add Coupon' },
      { state: 'not-found', name: 'Coupon Management List' },
      { state: 'not-found', name: 'Cart' },
      { state: 'not-found', name: 'Checkout' },
    ],
  },
  {
    state: 'promotion',
    name: 'Promotion Corner',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [{ state: 'not-found', name: 'Add Promotion' }, { state: 'not-found', name: 'Promotion Corner List' }],
  },
  {
    state: 'payment',
    name: 'Payment Gateways',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'not-found', name: 'Add Payment Gateway' },
      { state: 'not-found', name: 'Payment Gateway List' },
    ],
  },
  {
    state: 'email',
    name: 'Email Gateways',
    type: 'sub',
    icon: 'pages',
    children: [{ state: 'not-found', name: 'Add Email Gateway' }, { state: 'not-found', name: 'Email Gateway List' }],
  },
  {
    state: 'sms',
    name: 'SMS Gateways',
    type: 'sub',
    icon: 'pages',
    children: [{ state: 'not-found', name: 'Add SMS Gateway' }, { state: 'not-found', name: 'SMS Gateway List' }],
  },
  {
    state: 'news',
    name: 'News',
    type: 'sub',
    icon: 'pages',
    children: [{ state: 'not-found', name: 'Add News' }, { state: 'not-found', name: 'News List' }],
  },
  {
    state: 'whatsapp',
    name: 'Whatsapp Gateways',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'not-found', name: 'Add Whatsapp Gateways' },
      { state: 'not-found', name: 'Whatsapp Gateway List' },
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
