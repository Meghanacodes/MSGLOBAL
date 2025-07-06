import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-high-traffic-locations',
  imports: [CommonModule],
  templateUrl: './high-traffic-locations.html',
  styleUrl: './high-traffic-locations.css'
})
export class HighTrafficLocations {

    locations = [
    {
      title: 'Premium Shopping Malls',
      traffic: '15,000–25,000 daily foot traffic',
      image: '/Premium-Shopping-Malls.png',
      points: [
        'Digital displays at entrances and food courts',
        'Interactive kiosks near anchor stores',
        'Standees at promotional areas',
      ],
    },
    {
      title: 'Transit Hubs',
      traffic: '30,000–50,000 daily foot traffic',
      image: '/hubs.png',
      points: [
        'Large format displays at waiting areas',
        'Digital billboards at entrances/exits',
        'Targeted advertising in high dwell time zones',
      ],
    },
    {
      title: 'Commercial Districts',
      traffic: '20,000–40,000 daily foot traffic',
      image: '/Commercial-Districts.png',
      points: [
        'Strategic billboard placements',
        'Digital displays at building entrances',
        'Coordinated multi-location campaigns',
      ],
    },
  ];

}
