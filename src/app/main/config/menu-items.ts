import { Injectable } from '@angular/core';
import { Menu } from '../models/menu/menu';

const MENUITEMS: Menu[] = [
  {
    state: 'apps',
    name: 'Apps',
    type: 'sub',
    icon: 'apps',
    children: [
      { state: 'calendar', name: 'Calendar' },
      { state: 'email', name: 'Email' },
      { state: 'social', name: 'Social' },
      { state: 'chat', name: 'Chat' },
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
      { state: 'logistics-reception', name: 'Reception' },
      { state: 'logistics-messenger', name: 'Messenger' },
    ],
  },
  {
    state: 'registration',
    name: 'Registration',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      { state: 'patient', name: 'Add Registration', paramValue: 'registration' },
      { state: 'patient', name: 'Revisit Registration', paramValue: 'revisit-registration' },
      { state: 'bulk-registration', name: 'Bulk Registration' },
      { state: 'additional-tests', name: 'Additional Tests' },
      { state: 'registration-list', name: 'Registration List' },
      { state: 'reports', name: 'Reports' },
      { state: 'customer-feedback', name: 'Customer Feedback System' },
    ],
  },
  {
    state: 'payment',
    name: 'Payment',
    type: 'sub',
    icon: 'payment',
    children: [{ state: 'add-payment', name: 'Add Payment' }, { state: 'payment-list', name: 'Payment List' }],
  },
  {
    state: 'accession',
    name: 'Accession',
    type: 'sub',
    icon: 'offline_pin',
    children: [
      { state: 'temperature-control', name: 'Temperature Control' },
      { state: 'branch-samples', name: 'Branch Samples' },
      { state: 'sample-mapping', name: 'Samples Mapping' },
      { state: 'pending-accession', name: 'Pending Accession' },
      { state: 'problem-sample-notification', name: 'Problem Sample Notification' },
      { state: 'shipments', name: 'Shipments' },
    ],
  },
  {
    state: 'operations',
    name: 'Operations',
    type: 'sub',
    icon: 'rate_review',
    children: [
      { state: 'operations-home', name: 'Home' },
      { state: 'waiting-list', name: 'Waiting List' },
      { state: 'worksheets', name: 'Work Sheets' },
      { state: 'not-found', name: 'Lab Interface Module' },
      { state: 'results-authorization', name: 'Results Authorization' },
      { state: 'case', name: 'Case' },
    ],
  },
  {
    state: 'qualitycontrol',
    name: 'Quality Control',
    type: 'sub',
    icon: 'timeline',
    children: [
      { state: 'not-found', name: 'Devices' },
      { state: 'not-found', name: 'Levey Jennings Chart' },
      { state: 'not-found', name: 'WestGuard Rules' },
      { state: 'not-found', name: 'UserTrial Reports' },
    ],
  },
  {
    state: 'finance',
    name: 'Finance',
    type: 'sub',
    icon: 'attach_money',
    children: [
      { state: 'invoice', name: 'Invoice' },
      { state: 'not-found', name: 'Insurance' },
      { state: 'not-found', name: 'Credit Notes' },
      { state: 'not-found', name: 'Payment Collection' },
    ],
  },
  {
    state: 'maps',
    name: 'Maps',
    type: 'sub',
    icon: 'map',
    children: [{ state: 'google', name: 'Google' }, { state: 'leaflet', name: 'LeafLet' }],
  },
  {
    state: 'download',
    name: 'Download Center',
    type: 'sub',
    icon: 'get_app',
    children: [
      { state: 'request-forms', name: 'Request Forms' },
      { state: 'brochures', name: 'Brochures' }
    ],
  },
  {
    state: 'product',
    name: 'Product List',
    type: 'sub',
    icon: 'storefront',
    children: [
      { state: 'not-found', name: 'Directory of Services' },
      { state: 'not-found', name: 'Health Packages' },
      { state: 'not-found', name: 'Cart' },
      { state: 'not-found', name: 'Checkout' },
    ],
  },
  {
    state: 'user',
    name: 'User',
    type: 'sub',
    icon: 'supervised_user_circle',
    children: [
      { state: 'user-list', name: 'User List' },
      { state: 'not-found', name: 'User Profile' },
      { state: 'not-found', name: 'User PriceList' },
    ],
  },
  {
    state: 'pages',
    name: 'My Pages',
    type: 'sub',
    icon: 'pages',
    children: [
      { state: 'about-us', name: 'About Us' },
      { state: 'contact-us', name: 'Contact Us' },
      { state: 'send-message', name: 'Send us a Message' },
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
