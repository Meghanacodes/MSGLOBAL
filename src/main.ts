import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import { Monitor, LayoutDashboard, Flag } from 'lucide-angular';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));