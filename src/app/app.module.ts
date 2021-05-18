import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    MSALGuardConfigFactory,
    MSALInstanceFactory,
    MSALInterceptorConfigFactory} from './app.config';

import { 
  MsalGuard, MsalInterceptor, MsalBroadcastService,
    MsalModule, MsalService,
    MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG} from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    MyListingsComponent,
    ListingDetailComponent,
    ContactPageComponent,
    NewListingComponent,
    EditListingComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MsalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
