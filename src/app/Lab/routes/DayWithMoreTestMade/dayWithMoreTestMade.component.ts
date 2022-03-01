import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Patient {
  date: string;
  tests: number;
}

const ELEMENT_DATA: Patient[] = [
  {date: '28-02-2022', tests: 15},
  {date: '20-02-2022', tests: 14},
  {date: '15-02-2022', tests: 12},
  {date: '18-02-2022', tests: 11},
  {date: '05-02-2022', tests: 10},
  {date: '01-02-2022', tests: 9},
  {date: '09-02-2022', tests: 8},
  {date: '16-02-2022', tests: 5},
  {date: '22-02-2022', tests: 3},
  {date: '23-02-2022', tests: 2},
];

@Component({
  selector: 'app-createReport',
  templateUrl: './dayWithMoreTestMade.component.html',
  styleUrls: ['./dayWithMoreTestMade.component.css']
})

export class DayWithMoreTestMadeComponent {
  
  displayedColumns: string[] = ['date', 'tests'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
