import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell/spell-list/spell-list.component';
import { SpellDetailComponent } from './spell/spell-detail/spell-detail.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'spells-list', pathMatch: 'full' },
  { path: 'spell-detail/:id', component: SpellDetailComponent },
  { path: 'spells-list', component: SpellListComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
