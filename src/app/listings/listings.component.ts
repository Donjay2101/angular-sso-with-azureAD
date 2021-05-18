import { Component, OnInit } from '@angular/core';
import {Listing} from "../types";
import {fakeListings} from '../fake-data';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  Listings : Listing[]=[];

  constructor() { }

  ngOnInit(): void {
    this.Listings = fakeListings;
  }

}
