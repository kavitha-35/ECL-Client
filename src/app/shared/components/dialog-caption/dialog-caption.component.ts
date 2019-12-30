import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-caption',
  templateUrl: './dialog-caption.component.html',
  styleUrls: ['./dialog-caption.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogCaptionComponent {
  @Input() public title         : string;
  @Input() public subTitle      : string;
  @Input() public icon          : string;
}
