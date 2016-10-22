/**
 * Created by ganesh on 10/22/16.
 */


import {Component, OnInit} from "@angular/core";
import {DataSerice} from "../app.dataserice";

@Component({
  selector: 'app-comment',
 templateUrl:'app.comments.html',
  providers:[DataSerice]
})

export class CommentListComponent implements OnInit{

  comments:Comment[]=[];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private dataservice :DataSerice){

  }

  ngOnInit(){
    this.dataservice.getAll().subscribe(
      c => this.comments=c,
      e => this.errorMessage=e,
      () => this.isLoading =false
    )
  }
}
