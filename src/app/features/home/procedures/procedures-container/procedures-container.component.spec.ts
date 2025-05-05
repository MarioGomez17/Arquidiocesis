import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresContainerComponent } from './procedures-container.component';

describe('ProceduresContainerComponent', () => {
  let component: ProceduresContainerComponent;
  let fixture: ComponentFixture<ProceduresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
