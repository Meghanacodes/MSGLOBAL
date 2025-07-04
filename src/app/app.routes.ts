import { Routes } from '@angular/router';
import { CustomSolutions } from './custom-solutions/custom-solutions';
import { B2bMetrics } from './b2b-metrics/b2b-metrics';
import { HighTrafficLocations } from './high-traffic-locations/high-traffic-locations';
import { Footer } from './footer/footer';

export const routes: Routes = [
  { path: 'custom-solutions', component: CustomSolutions },
  {path: 'b2b-metrics', component: B2bMetrics}, 
  { path: 'locations', component: HighTrafficLocations },
    { path: 'footer', component: Footer },


];
