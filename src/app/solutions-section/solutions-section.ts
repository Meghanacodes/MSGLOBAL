import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions-section',
  imports: [CommonModule],
  templateUrl: './solutions-section.html',
  styleUrl: './solutions-section.css'
})
export class SolutionsSection {

   gridItems = [
    {
      image: '/Real-time.png',
      title: 'Real-time content updates',
      // description: 'Short description or caption goes here.'
    },
    {
      image: '/custom-branding.png',
      title: 'Custom branding options',
    },
    {
      image: '/portable.png',
      title: 'Lightweight & portable designs',
      // description: 'Short description or caption goes here.'
    },
    {
      image: '/high-traffic.png',
      title: 'Premium high-traffic locations',
      // description: 'Short description or caption goes here.'
    },
    {
      image: '/hubs.png',
      title: 'Transit Hubs',
      // description: 'Short description or caption goes here.'
    },
    {
      image: '/sizes-branding.png',
      title: 'Sizes and formats display',
      // description: 'Short description or caption goes here.'
    },
  ];

}
