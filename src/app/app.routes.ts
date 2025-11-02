import { Routes } from '@angular/router';
import { UserDetailPage } from './pages/user-detail-page/user-detail-page';
import { UsersPageComponent } from './pages/users-pages/users-pages';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersPageComponent },
  { path: 'users/:id', component: UserDetailPage },
];
