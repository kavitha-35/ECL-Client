import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public selectedMessage: any;
  messages: Object[] = [{
    from: 'John Doe',
    photo: 'assets/images/face1.jpg',
    subject: 'Online',
  }, {
    from: 'Geremy Ginner',
    photo: 'assets/images/face2.jpg',
    subject: 'Online',
  }, {
    from: 'Tom Diaz',
    photo: 'assets/images/face3.jpg',
    subject: 'Offline',
  }, {
    from: 'Dave Bension',
    photo: 'assets/images/face4.jpg',
    subject: 'Away',
  }, {
    from: 'Petter Brook',
    photo: 'assets/images/face5.jpg',
    subject: 'Busy',
  }, {
    from: 'Genna Mercy',
    photo: 'assets/images/face6.jpg',
    subject: 'Busy',
  }, {
    from: 'Harmy Junior',
    photo: 'assets/images/face7.jpg',
    subject: 'In a meeting',
  }
  ];

  constructor() {
    this.selectedMessage = this.messages[1];
  }

  ngOnInit(): void { }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  onSelect(message: Object[]): void {
    this.selectedMessage = message;
  }
}
