import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient) {  
  }

  // myMethod(){
  //   return this.http.get('http://api.openbrewerydb.org/breweries');
  // }

  getBeer1(){
    return this._http.get('http://api.openbrewerydb.org/breweries');
  }

  newApiUrl = "https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=091c9a1527e94821917fa1063f51028a"
  
  topHeading():Observable<any>{
    return this._http.get(this.newApiUrl)
  }
}
