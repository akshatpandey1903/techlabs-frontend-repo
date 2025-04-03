import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CardsComponent } from './cards/cards.component';
import { ChangecolorDirective } from './shared/directives/changecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CardsComponent,
    ChangecolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
