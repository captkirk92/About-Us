import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      text: "Our stickers are top-notch! The quality is amazing and they arrived faster than I expected. Will definitely order again.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Briana Patton",
      role: "Etsy Shop Owner",
    },
    {
      text: "I was blown away by the vibrant colors and sharp details. My custom design looks incredible. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Bilal Ahmed",
      role: "Graphic Designer",
    },
    {
      text: "The support team was exceptional, guiding us through the ordering process and ensuring we got exactly what we wanted.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Saman Malik",
      role: "Event Planner",
    },
    {
      text: "These stickers are incredibly durable. I put one on my water bottle and it's been through the dishwasher countless times without fading.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Omar Raza",
      role: "Startup CEO",
    },
    {
      text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Zainab Hussain",
      role: "Project Manager",
    },
    {
      text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Aliza Khan",
      role: "Business Analyst",
    },
    {
      text: "The proofing process was so easy and gave me confidence that my stickers would turn out perfectly. And they did!",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Farhan Siddiqui",
      role: "Marketing Director",
    },
    {
      text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Sana Sheikh",
      role: "Sales Manager",
    },
    {
      text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Hassan Ali",
      role: "E-commerce Manager",
    },
  ]);

  firstColumn = this.testimonials().slice(0, 3);
  secondColumn = this.testimonials().slice(3, 6);
  thirdColumn = this.testimonials().slice(6, 9);
}
