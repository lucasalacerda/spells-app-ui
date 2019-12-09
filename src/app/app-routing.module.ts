import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell/spell-list/spell-list.component';
import { SpellDetailComponent } from './spell/spell-detail/spell-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { HomeComponent } from './structure/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'spell-detail/:id', component: SpellDetailComponent },
  { path: 'spells-list', component: SpellListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService] },
  { path: 'character-detail/:id', component: CharacterDetailComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
