import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowingComponent } from './knowing.component';

describe('KnowingComponent', () => {
  let component: KnowingComponent;
  let fixture: ComponentFixture<KnowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
