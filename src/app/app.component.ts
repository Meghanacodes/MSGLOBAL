import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { HeroSectionComponent } from './hero-section/hero-section';
import { SolutionsSection } from './solutions-section/solutions-section';
import { CustomSolutions } from './custom-solutions/custom-solutions';
import { B2bMetrics } from './b2b-metrics/b2b-metrics';
import { HighTrafficLocations } from './high-traffic-locations/high-traffic-locations';
import { Footer } from './footer/footer';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-root',
  standalone: true, // Add this if you're using standalone components
  imports: [RouterOutlet,NavbarComponent,HeroSectionComponent,SolutionsSection,CustomSolutions,B2bMetrics,HighTrafficLocations,ContactForm,Footer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class App {
  protected title = 'my-angular18-app';
}
