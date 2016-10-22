/**
 * Created by ganesh on 10/22/16.
 */


import {Component, OnInit} from "@angular/core";
import {DataSerice} from "../app.dataserice";

@Component({
  selector: 'app-comment',
 template:`<h1>Hello</h1>`,
  providers:[DataSerice]
})

export class CommentListComponent implements OnInit{

  constructor(private dataservice :DataSerice){

  }

  ngOnInit(){

  }
}
