import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresCardComponent } from './procedures-card.component';

describe('ProceduresCardComponent', () => {
  let component: ProceduresCardComponent;
  let fixture: ComponentFixture<ProceduresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
