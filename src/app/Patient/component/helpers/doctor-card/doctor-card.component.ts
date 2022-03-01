import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  @Input() admin: boolean = false;
  @Input() pacient: boolean  = false;
  @Input() doctor: any;
  @Input() id:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
