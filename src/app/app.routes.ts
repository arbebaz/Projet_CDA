import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { PremierComposantComponent } from './pages/specific/premier-composant/premier-composant.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: 'premier-composant', component: PremierComposantComponent },

  { path: '**', component: NotFoundComponent },
];
