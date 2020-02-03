import { Injectable } from '@angular/core';
import { Menu } from '../models/menu/menu';

const MENUITEMS: Menu[] = [
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    children: [
      { state: 'calendar', name: 'Calendar', type: 'link' },
      { state: 'email', name: 'Email', type: 'link' },
      { state: 'social', name: 'Social', type: 'link' },
      { state: 'chat', name: 'Chat', type: 'link' },
    ],
  },
  {
    state: 'book-appointment',
    name: 'Appointments',
    type: 'link',
    icon: 'library_books',
  },
  {
    state: 'home-collection',
    name: 'Home Collections',
    type: 'link',
    icon: 'home',
  },
  {
    state: 'logistics',
    name: 'Logistics',
    type: 'sub',
    icon: 'polymer',
    children: [
      { state: 'logistics-reception', name: 'Reception', type: 'link' },
      { state: 'logistics-messenger', name: 'Messenger', type: 'link' },
    ],
  },
  {
    state: 'registration',
    name: 'Registration',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      { state: 'registrations', name: 'Add Registration', paramValue: 'registration', type: 'link' },
      { state: 'patient', name: 'Revisit Registration', paramValue: 'revisit-registration', type: 'link' },
      { state: 'bulk-registration', name: 'Bulk Registration', type: 'link' },
      { state: 'additional-tests', name: 'Additional Tests', type: 'link' },
      { state: 'registration-list', name: 'Registration List', type: 'link' },
      { state: 'reports', name: 'Reports', type: 'link' },
      { state: 'customer-feedback', name: 'Customer Feedback System', type: 'link' },
    ],
  },
  {
    state: 'payment-list',
    name: 'Payment',
    type: 'link',
    icon: 'payment',
  },
  {
    state: 'accession',
    name: 'Accession',
    type: 'sub',
    icon: 'offline_pin',
    children: [
      { state: 'temperature-control', name: 'Temperature Control', type: 'link' },
      { state: 'branch-samples', name: 'Branch Samples', type: 'link' },
      { state: 'sample-mapping', name: 'Samples Mapping', type: 'link' },
      { state: 'pending-accession', name: 'Pending Accession', type: 'link' },
      { state: 'problem-sample-notification', name: 'Problem Sample Notification', type: 'link' },
      { state: 'shipments', name: 'Shipments', type: 'link' },
    ],
  },
  {
    state: 'operations',
    name: 'Operations',
    type: 'sub',
    icon: 'rate_review',
    children: [
      { state: 'operations-home', name: 'Home', type: 'link' },
      {
        state: 'waiting-list',
        name: 'Waiting List',
        type: 'sub',
        children1: [
          {
            state: 'waiting-list',
            name: 'STAT Sample',
            type: 'link',
          },
          {
            state: 'waiting-list',
            name: 'Delay Notification',
            type: 'link',
          },
          {
            state: 'waiting-list',
            name: 'Critical Calls',
            type: 'link',
          },
        ],
      },
      {
        state: 'worksheets',
        name: 'Work Sheets',
        type: 'sub',
        children1: [
          {
            state: 'worksheets',
            name: 'Outsource Test Request ',
            type: 'link',
          },
          {
            state: 'worksheets',
            name: 'Delay Notification',
            type: 'link',
          },
          {
            state: 'worksheets',
            name: 'Workload Register',
            type: 'link',
          },
          {
            state: 'worksheets',
            name: 'Complete Register',
            type: 'link',
          },
        ],
      },
      { state: 'not-found', name: 'Lab Interface Module', type: 'link' },
      { state: 'results-authorization', name: 'Results Authorization', type: 'link' },
      { state: 'case', name: 'Case', type: 'link' },
    ],
  },
  {
    state: 'qualitycontrol',
    name: 'Quality Control',
    type: 'sub',
    icon: 'timeline',
    children: [
      { state: 'not-found', name: 'Devices', type: 'link' },
      { state: 'not-found', name: 'Levey Jennings Chart', type: 'link' },
      { state: 'not-found', name: 'WestGuard Rules', type: 'link' },
      { state: 'not-found', name: 'UserTrial Reports', type: 'link' },
    ],
  },
  {
    state: 'finance',
    name: 'Finance',
    type: 'sub',
    icon: 'attach_money',
    children: [
      {
        state: 'invoice',
        name: 'Invoice',
        type: 'sub',
        children1: [
          {
            state: 'invoice',
            name: 'Add Newn Invoice',
            type: 'link',
          },
          {
            state: 'invoice',
            name: 'Invoice Summary',
            type: 'link',
          },
          {
            state: 'invoice',
            name: 'Invoice List',
            type: 'link',
          },
        ],
      },
      {
        state: 'not-found',
        name: 'Insurance',
        type: 'sub',
        children1: [
          {
            state: 'insurance',
            name: 'Revenue Cycle Management',
            type: 'link',
          },
          {
            state: 'insurance',
            name: 'Eclaims Management',
            type: 'link',
          },
        ],
      },
      { state: 'not-found', name: 'Credit Notes', type: 'link'},
      {
        state: 'problem-sample-notification',
        name: 'Payment Collection',
        type: 'sub',
        children1: [
          {
            state: 'ledger-account',
            name: 'Ledger Account ',
            type: 'link',
          },
        ],
      },
    ],
  },
  {
    state: 'maps',
    name: 'Maps',
    type: 'sub',
    icon: 'map',
    children: [{ state: 'google', name: 'Google', type: 'link' }, { state: 'leaflet', name: 'LeafLet', type: 'link' }],
  },
  {
    state: 'download',
    name: 'Download Center',
    type: 'sub',
    icon: 'get_app',
    children: [
      { state: 'request-forms', name: 'Request Forms', type: 'link' },
      { state: 'brochures', name: 'Brochures', type: 'link' },
    ],
  },
  {
    state: 'product',
    name: 'Product List',
    type: 'sub',
    icon: 'storefront',
    children: [
      { state: 'not-found', name: 'Directory of Services', type: 'link' },
      { state: 'not-found', name: 'Health Packages', type: 'link' },
      { state: 'not-found', name: 'Cart', type: 'link' },
      { state: 'not-found', name: 'Checkout', type: 'link' },
    ],
  },
  {
    state: 'user',
    name: 'User',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      { state: 'user-list', name: 'User List', type: 'link' },
      { state: 'not-found', name: 'User Profile', type: 'link' },
      { state: 'not-found', name: 'User PriceList', type: 'link' },
    ],
  },
  {
    state: 'pages',
    name: 'My Pages',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'about-us', name: 'About Us', type: 'link' },
      { state: 'contact-us', name: 'Contact Us', type: 'link' },
      { state: 'send-message', name: 'Send us a Message', type: 'link' },
    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu): void {
    MENUITEMS.push(menu);
  }
}
