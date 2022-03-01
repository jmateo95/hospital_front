import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-card',
  templateUrl: './tests-card.component.html',
  styleUrls: ['./tests-card.component.css']
})
export class TestsCardComponent implements OnInit {

@Input() test:any;

  constructor() { }

  ngOnInit(): void {
  }

}
