import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule], // ✅ Add this here
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})
export class HeroSectionComponent {
  slides = [
  { image: '/Brand.png',title: 'Slide 1', description: 'Description for Slide 1' },
  { image: '/2.png', title: 'Slide 2', description: 'Description for Slide 2' },
  { image: '/3.png', title: 'Slide 3', description: 'Description for Slide 3' },
];


  currentIndex = 0;
  autoplayInterval: any;

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  ngOnInit() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // ⏱️ every 5 seconds
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval); // ✅ clean up
  }
}
