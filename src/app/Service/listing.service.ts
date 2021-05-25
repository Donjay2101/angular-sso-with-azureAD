import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{MsalService} from '@azure/msal-angular';
import { Listing } from '../types';

@Injectable({
    providedIn: 'root',
})

  export class ListingService{
    constructor(private http:HttpClient,private msalService:MsalService) {}
 
    // Uses http.get() to load data from a single API endpoint
    getLists():Promise<Listing[]> {
    
        let listing:Listing[];
    let activeAccount = this.msalService.instance.getActiveAccount();

    if (!activeAccount && this.msalService.instance.getAllAccounts().length > 0) {
      let accounts = this.msalService.instance.getAllAccounts();
      this.msalService.instance.setActiveAccount(accounts[0]);
    }
    return new Promise((resolve,reject)=>{
        let token ="";
         this.msalService.instance.acquireTokenSilent( {
            scopes: ['api://e3f69ac7-305d-42c8-9137-61d25da2daa4/.default' ,'openid', 'offline_access']
          }).then(x=>{
                token = x.accessToken
                console.log("token",token);
                var reqHeader = new HttpHeaders({ 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token 
                 });
                 this.http.get<Listing[]>('https://localhost:44336/api/Products',{headers:reqHeader}).subscribe(x=>{ 
                 listing=x;
                 resolve(listing);
                });
                
          });
    });

    }
  }