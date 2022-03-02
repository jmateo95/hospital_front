import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  id="";
  constructor(private route:ActivatedRoute, private location: Location) { }
  displayedColumns = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id'];
  }
  back(): void {
    this.location.back()
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pediatria' },
  {position: 2, name: 'Cirugia' },
  {position: 3, name: 'Cardiologia'}
];