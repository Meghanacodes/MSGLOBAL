import { Routes } from '@angular/router';
import { CustomSolutions } from './custom-solutions/custom-solutions';
import { B2bMetrics } from './b2b-metrics/b2b-metrics';
import { HighTrafficLocations } from './high-traffic-locations/high-traffic-locations';
import { Footer } from './footer/footer';
import { SolutionsSection } from './solutions-section/solutions-section';
import { ContactForm } from './contact-form/contact-form';

export const routes: Routes = [
  { path: 'custom-solutions', component: CustomSolutions },
  { path: 'b2b-metrics', component: B2bMetrics },
  { path: 'services', component: SolutionsSection },
  { path: 'locations', component: HighTrafficLocations },
  { path: 'contact', component: ContactForm},
  { path: 'footer', component: Footer },
];
