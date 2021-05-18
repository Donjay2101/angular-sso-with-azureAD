import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingsComponent} from "./listings/listings.component";
import {ListingDetailComponent} from "./listing-detail/listing-detail.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EditListingComponent} from "./edit-listing/edit-listing.component";
import {NewListingComponent} from "./new-listing/new-listing.component";
import {MyListingsComponent} from "./my-listings/my-listings.component";
import {MsalGuard} from '@azure/msal-angular';

const routes: Routes = [
  {path:"",redirectTo:"/listings", pathMatch:"full"},
  {path:"listings",canActivate:[MsalGuard], component:ListingsComponent, pathMatch:"full"},
  {path:"listings/:id",canActivate:[MsalGuard], component:ListingDetailComponent},
  {path:"contact/:id",canActivate:[MsalGuard], component:ContactPageComponent},
  {path:"edit-listing/:id",canActivate:[MsalGuard], component:EditListingComponent},
  {path:"new-listing",canActivate:[MsalGuard], component:NewListingComponent},
  {path:"my-listings",canActivate:[MsalGuard], component:MyListingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
