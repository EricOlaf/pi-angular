import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PiDetailsComponent } from './pages/pi-details/pi-details.component';
import { PiListComponent } from './pages/pi-list/pi-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'investigator-list',
    component: PiListComponent,
    title: 'List of PIs',
  },
  {
    path: 'details/:id',
    component: PiDetailsComponent,
    title: 'Details',
  },
];

export default routes;
