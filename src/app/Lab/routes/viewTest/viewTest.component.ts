import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface Patient {
  name: string;
  hour: string;
}

const ELEMENT_DATA: Patient[] = [
  {hour: '14:00', name: 'Paciente 1'},
  {hour: '15:00', name: 'Paciente 2'},
  {hour: '16:00', name: 'Paciente 3'},
  {hour: '17:00', name: 'Paciente 4'},
  {hour: '18:00', name: 'Paciente 5'},
  {hour: '19:00', name: 'Paciente 6'},
  {hour: '20:00', name: 'Paciente 7'},
];

@Component({
  selector: 'app-createReport',
  templateUrl: './viewTest.component.html',
  styleUrls: ['./viewTest.component.css']
})

export class ViewTestComponent {
 
  displayedColumns: string[] = ['hour', 'demo-name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
