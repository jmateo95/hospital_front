import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  id="";
  constructor(private route:ActivatedRoute) { }
  displayedColumns = ['position', 'name', 'editar'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id'];
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