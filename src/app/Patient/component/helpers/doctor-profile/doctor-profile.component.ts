import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctores/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  id = "";
  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private doctorService: DoctorService
    ) { }
  displayedColumns = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  doctor:any;

  ngOnInit(): void {
    var params = (this.route.snapshot.params);
    this.id = params['id'];
    this.doctorService.getDoctorId(this.id).subscribe(resp => {
      this.doctor = resp;
    },
      error => {
        console.error(error);
      }
    );
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
  { position: 1, name: 'Pediatria' },
  { position: 2, name: 'Cirugia' },
  { position: 3, name: 'Cardiologia' }
];