import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
