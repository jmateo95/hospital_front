import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-lab',
  templateUrl: './card-lab.component.html',
  styleUrls: ['./card-lab.component.css']
})
export class CardLabComponent implements OnInit {

  @Input() admin: boolean = false;
  @Input() id:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
