import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fakeListings} from '../fake-data';
import {Listing} from '../types';
@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  Listing : Listing;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.Listing = fakeListings.find(listings=>listings.id==id);
  }

}
