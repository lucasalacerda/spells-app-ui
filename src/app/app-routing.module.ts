import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'spells-list', pathMatch: 'full' },
  { path: 'spell-detail/:id', component: SpellDetailComponent },
  { path: 'spells-list', component: SpellListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
