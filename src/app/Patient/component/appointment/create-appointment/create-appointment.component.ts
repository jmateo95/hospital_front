import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  time = {hour: 13, minute: 30};
    controlSpecialties = new FormControl();
    controlDoctors = new FormControl();
    optionsSpecialties: string[] = ['Pediatria', 'Odontologia', 'Consulta General'];
    optionsDoctors: string[] = ['Dr. Jose Perez', 'Dra. Maria Mendez', 'Dra. Luisa Gonzalez'];
    filteredOptionsDoctors!: Observable<string[]>;
    filteredOptionsSpecialties!: Observable<string[]>;

  constructor(private formBuilder:FormBuilder, private dateAdapter: DateAdapter<Date>){
  this.dateAdapter.setLocale('en-GB');  //para cambiar el formato de la fecha dd/MM/yyyy
}
  
  appointmentForm = this.formBuilder.group({
    fecha:[''],
    hora:[''],
    especialidad:[''],
    doctor:['']
  });

  ngOnInit(): void {
    this.filteredOptionsDoctors = this.controlDoctors.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_doctors(value)),
    );
    this.filteredOptionsSpecialties = this.controlSpecialties.valueChanges.pipe(
      startWith(''),
      map(valued => this._filter_specialties(valued)),
    );
   
  }

  saveForm(){
    console.log('Form data is ', this.appointmentForm.value);
  }
  private _filter_specialties(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsSpecialties.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter_doctors(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsDoctors.filter(optiond => optiond.toLowerCase().includes(filterValue));
  }

}
