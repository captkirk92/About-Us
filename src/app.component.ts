import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface CompanyValue {
  icon: string; // SVG path data
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent {
  teamMembers = signal<TeamMember[]>([
    {
      name: 'Jane Doe',
      role: 'Founder & CEO',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'John Smith',
      role: 'Head of Design',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily White',
      role: 'Lead Production Artist',
      imageUrl: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'Customer Happiness Lead',
      imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg'
    }
  ]);

  companyValues = signal<CompanyValue[]>([
    {
      icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
      title: 'Passion for Print',
      description: 'We believe in the power of tangible art. Our passion drives us to produce stickers that you\'ll be proud to stick and share.'
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
      title: 'Unmatched Quality',
      description: 'From vibrant, long-lasting inks to durable, weatherproof materials, we never compromise on quality. Your art deserves the best.'
    },
    {
      icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
      title: 'Creative Freedom',
      description: 'Your vision, your way. Our tools and team are here to make turning your digital designs into physical stickers as easy as possible.'
    }
  ]);
}