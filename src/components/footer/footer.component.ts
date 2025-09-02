
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  usefulLinks = [
    { name: 'Usages', href: '#' },
    { name: 'Add-Ons', href: '#' },
    { name: 'Our Sticker Packs', href: '#' },
    { name: 'Order Samples', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  supportLinks = [
    { name: 'Contact us', href: '#' },
    { name: 'Quote', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: "How to's", href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Payments', href: '#' }
  ];

  companyLinks = [
    { name: 'About us', href: '#' },
    { name: 'Legal', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];
}
