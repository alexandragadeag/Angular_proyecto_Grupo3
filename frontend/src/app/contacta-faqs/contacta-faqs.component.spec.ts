import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaFaqsComponent } from './contacta-faqs.component';

describe('ContactaFaqsComponent', () => {
  let component: ContactaFaqsComponent;
  let fixture: ComponentFixture<ContactaFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactaFaqsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactaFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
