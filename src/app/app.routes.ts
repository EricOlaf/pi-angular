import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PiDetailsComponent } from './pages/pi-details/pi-details.component';
import { PiListComponent } from './pages/pi-list/pi-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'investigator-list',
    component: PiListComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: PiDetailsComponent,
    title: 'Home page',
  },
];

export default routes;
