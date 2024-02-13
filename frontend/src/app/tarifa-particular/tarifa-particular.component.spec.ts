import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaParticularComponent } from './tarifa-particular.component';

describe('TarifaParticularComponent', () => {
  let component: TarifaParticularComponent;
  let fixture: ComponentFixture<TarifaParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifaParticularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifaParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
