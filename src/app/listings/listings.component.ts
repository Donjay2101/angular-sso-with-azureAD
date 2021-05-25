import { Component, OnInit } from '@angular/core';
import {Listing} from "../types";
import {fakeListings} from '../fake-data';
import { ListingService} from '../Service/listing.service';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  Listings : Listing[]=[];

  constructor(private listService:ListingService,) { }

  ngOnInit(): void {
      this.listService.getLists().then(x=>{
        this.Listings= x;
      });

     console.log('d',this.Listings);
  }

}
