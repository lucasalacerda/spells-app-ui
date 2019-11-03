import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    NavBarComponent,
    SpellDetailComponent,
    ModalContentComponent
  ],
  entryComponents: [ ModalContentComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
