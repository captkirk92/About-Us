
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navLinks = ['Stickers', 'Labels', 'Materials'];
  actionLinks = ['Reorder', 'Quote', 'Support'];
}
