import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaEmpresaComponent } from './tarifa-empresa.component';

describe('TarifaEmpresaComponent', () => {
  let component: TarifaEmpresaComponent;
  let fixture: ComponentFixture<TarifaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifaEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
