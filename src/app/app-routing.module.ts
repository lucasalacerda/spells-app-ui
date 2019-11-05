import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { LoginComponent } from './login/login.component';

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
