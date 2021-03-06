import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellListComponent } from './spell/spell-list/spell-list.component';
import { NavBarComponent } from './structure/nav-bar/nav-bar.component';
import { SpellDetailComponent } from './spell/spell-detail/spell-detail.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { LoginComponent } from './auth/login/login.component';
import { LoaderComponent } from './structure/loader/loader.component';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { CreateCharacterComponent } from './character/create-character/create-character.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { SearchSpellComponent } from './spell/search-spell/search-spell.component';
import { HomeComponent } from './structure/home/home.component';
import { FilterSpellPipe } from './pipes/filter-spell.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    NavBarComponent,
    SpellDetailComponent,
    ModalContentComponent,
    LoginComponent,
    LoaderComponent,
    UserDashboardComponent,
    CreateCharacterComponent,
    CharacterDetailComponent,
    SearchSpellComponent,
    HomeComponent,
    FilterSpellPipe
  ],
  entryComponents: [ ModalContentComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TruncateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
