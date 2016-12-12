import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./Login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ContactsComponent} from "./contacts/components/contacts.component";
import {ContactService} from "./contacts/services/contact.service";
import {AddContactComponent} from "./contacts/components/add-contact/add-contact.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
      },
      {
        path: 'contacts',
        children: [
          { path: 'add', component:AddContactComponent},
          { path: 'edit/:id', component:AddContactComponent},
          { path: '', component:ContactsComponent}
        ]
      }
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
