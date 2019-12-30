import { Component, OnInit } from '@angular/core';
import { Message } from 'app/main/models/apps/mail/message.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
// TO Do:Dummy messages need to be replaced
  messages: Message[] = [{
    from: 'Social',
    date: 1427207139000,
    subject: '7 Things You Should Not Do With Admin Themes',
    avatar: 'assets/images/face4.jpg',
    icon: 'group',
    iconClass: 'mat-text-primary',
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Personal',
    type: 'danger',
    important: true,
    id: 1
  }, {
    from: 'Promotions',
    date: 1427412725002,
    subject: 'The Worst Advice You Could Ever Get About Admin Themes',
    avatar: 'assets/images/face2.jpg',
    icon: 'local_offer',
    iconClass: 'mat-text-warn',
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Personal',
    type: 'success',
    important: false,
    id: 2
  }, {
    from: 'Updates',
    date: 1427546580000,
    subject: '15 Gifts for the Admin Themes Lover in Your Life',
    avatar: 'assets/images/face3.jpg',
    icon: 'info',
    iconClass: 'mat-text-accent',
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Clients',
    type: 'info',
    important: false,
    id: 3
  }, {
    from: 'Caleb Ruple',
    date: 1427891640000,
    subject: 'The Admin Themes Case Study You will Never Forget',
    avatar: 'assets/images/face3.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Family',
    type: 'warning',
    important: true,
    id: 4
  }, {
    from: 'Billy Brandon',
    date: 1428275520000,
    subject: 'What Sports Can Teach Us About Admin Themes',
    avatar: 'assets/images/face2.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Friends',
    type: 'info',
    important: false,
    id: 5
  }, {
    from: 'Regld Wattey',
    date: 1428830580000,
    subject: '10 Things You Learned in Kindergarden That will Help You With Admin Themes',
    avatar: 'assets/images/face3.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Personal',
    type: 'success',
    important: false,
    id: 6
  }, {
    from: 'Joelle Stockstill',
    date: 1429363920000,
    subject: '8 11 Ways to Completely Revamp Your Admin Themes',
    avatar: 'assets/images/face4.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Personal',
    type: 'default',
    important: false,
    id: 7
  }, {
    from: 'Kit Coronado',
    date: 1430274720000,
    subject: 'Why Nobody Cares About Admin Themes',
    avatar: 'assets/images/face5.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Clients',
    type: 'default',
    important: false,
    id: 8
  }, {
    from: 'Marita Wigginton',
    date: 1431293520000,
    subject: 'What is Holding Back the Admin Themes Industry?',
    avatar: 'assets/images/face2.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Family',
    type: 'success',
    important: false,
    id: 9
  }, {
    from: 'Katrina Minns',
    date: 1433115240000,
    subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    avatar: 'assets/images/face1.jpg',
    icon: false,
    iconClass: false,
    body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>',
    tag: 'Friends',
    type: 'info',
    important: true,
    id: 10
  }];
  selectedMessage: Message;

  constructor() { }

  ngOnInit(): void { }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
