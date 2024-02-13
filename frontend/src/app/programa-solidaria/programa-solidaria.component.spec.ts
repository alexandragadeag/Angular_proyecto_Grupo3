import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaSolidariaComponent } from './programa-solidaria.component';

describe('ProgramaSolidariaComponent', () => {
  let component: ProgramaSolidariaComponent;
  let fixture: ComponentFixture<ProgramaSolidariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaSolidariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramaSolidariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
