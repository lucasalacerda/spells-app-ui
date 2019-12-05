import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell/spell-list/spell-list.component';
import { SpellDetailComponent } from './spell/spell-detail/spell-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'spells-list', pathMatch: 'full' },
  { path: 'spell-detail/:id', component: SpellDetailComponent },
  { path: 'spells-list', component: SpellListComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
