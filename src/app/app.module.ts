import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    NavBarComponent,
    SpellDetailComponent,
    ModalContentComponent,
    LoginComponent
  ],
  entryComponents: [ ModalContentComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
