import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresButtonComponent } from './procedures-button.component';

describe('ProceduresButtonComponent', () => {
  let component: ProceduresButtonComponent;
  let fixture: ComponentFixture<ProceduresButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
