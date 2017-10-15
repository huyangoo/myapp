import {Router, RouterModule} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';

const routes: Router = [
  {
    path: 'heroes',
    component: HeroesComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

