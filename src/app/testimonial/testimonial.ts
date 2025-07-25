import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css'
})
export class Testimonial {

testimonials = [
  {
    stars: 5,
    title: 'Exceptional Service!',
    text: 'Exceptional branding service! I was thoroughly impressed and delighted with the outcome, since it was a last-minute request that was delivered on time.',
    author: 'Wade Warren',
    location: 'USA, California',
    image: './assets/Profile.png'
  },
  {
    stars: 5,
    title: 'Loved the Experience!',
    text: 'Amazing support and design. Very responsive and creative team.',
    author: 'Sarah Jones',
    location: 'UK, London',
    image: './assets/Profile.png'
  },
  {
    stars: 5,
    title: 'Truly Professional',
    text: 'Quick delivery and great communication throughout the project.',
    author: 'Amit Singh',
    location: 'India, Bangalore',
    image: './assets/Profile.png'
  }
];


}
