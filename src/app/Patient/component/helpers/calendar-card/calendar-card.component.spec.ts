import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendarCardComponent } from './calendar-card.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CitaService } from 'src/app/services/cita/cita.service';
import { ExamenService } from 'src/app/services/examenes/examen.service';
import { of } from 'rxjs/internal/observable/of';

describe('CalendarCardComponent', () => {
  let component: CalendarCardComponent;
  let fixture: ComponentFixture<CalendarCardComponent>;
  let usuarioService: UsuarioService;
  let citaService: CitaService;
  let testService: ExamenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [CalendarCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCardComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.get(UsuarioService)
    testService = TestBed.get(ExamenService)
    citaService = TestBed.get(CitaService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("loadEventsBack ", () => {
    const response = [
       {
        especialidad :{
          nombre: "tomografia"
        },
        fecha: "2022/02/02",
        hora: "10:00:00"
      }
    ];
    const response2 = [
       {
        tipo :{
          nombre: "tomografia"
        },
        fecha: "2022/02/02",
        hora: "10:00:00"
      }
    ];
    spyOn(citaService, 'getWeekCitas').and.returnValue(of(response));
    spyOn(testService, 'getWeekTest').and.returnValue(of(response2));
    component.loadEventsBack()
    fixture.detectChanges();

  });

  it("loadEventsPrev ", () => {
    component.loadEventsPrev()
    fixture.detectChanges();
    expect(component.week).toEqual(-1)

  });
  it("loadTodayEvents ", () => {
    component.loadTodayEvents()
    fixture.detectChanges();
    expect(component.week).toEqual(0)

  });
  it("loadEventsAfter ", () => {
    component.loadEventsAfter()
    fixture.detectChanges();
    expect(component.week).toEqual(1)

  });



});
