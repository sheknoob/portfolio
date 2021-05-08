import { Routes } from '@angular/router';
import {
  lazyLoadAboutComponent,
  lazyLoadPortfolioComponent,
  lazyLoadTaskManager
} from './lazy-load/lazy-load-components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
    data: {
      title: `Abhisheks Portfolio`
    }
  },
  {
    path: 'portfolio',
    loadChildren: lazyLoadPortfolioComponent,
    data: {
      animation: 'portfolio',
      title: `Abhishek's Portfolio`
    }
  },
  {
    path: 'about-me',
    loadChildren: lazyLoadAboutComponent,
    data: {
      animation: 'about-me',
      title: 'About Me'
    }
  },
  {
    path: 'task-manager',
    loadChildren: lazyLoadTaskManager,
    data: {
      animation: 'task-manager',
      title: 'Task Manager'
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: lazyLoadPortfolioComponent,
    data: {
      title: `Abhishek's Portfolio`
    }
  }
];
