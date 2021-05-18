import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  name:string ='';
  description:string='';
  price:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    alert('creating the new listing');
    this.router.navigateByUrl('/my-listings');
  }

}
