import { Component, OnInit } from '@angular/core';
import {fakeMyListings} from '../fake-data';
import {Listing} from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

  Listings:Listing[]=[];
  constructor() { }

  ngOnInit(): void {
    this.Listings= fakeMyListings;
  }
  onDeleteClicked(listingID:string):void{
    alert('listing is delete');
  }


}
