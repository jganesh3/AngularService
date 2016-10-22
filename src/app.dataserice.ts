/**
 * Created by ganesh on 10/22/16.
 */


import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataSerice{

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http:Http){

  }

  getAll():Observable<Comment[]>{

    return this._http.get(this.baseUrl).map((res:Response)=> res.json()).catch(this.handleError);
      }


  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
