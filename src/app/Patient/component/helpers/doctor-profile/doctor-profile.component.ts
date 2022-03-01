import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  id="";
  @Input() admin: boolean = true;
  @Input() patient: boolean = true;
  constructor(private route:ActivatedRoute) { }
  displayedColumns = ['position', 'name','editar'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    var params=(this.route.snapshot.params);
    this.id = params['id'];
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  editar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pediatria' ,editar: 'si'},
  {position: 2, name: 'Cirugia',editar: 'si' },
  {position: 3, name: 'Cardiologia',editar: 'si'}
];