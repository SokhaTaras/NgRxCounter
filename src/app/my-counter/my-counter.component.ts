import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from "../NgRx/counter.action";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
