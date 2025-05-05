import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchCardComponent } from './church-card.component';

describe('ChurchCardComponent', () => {
  let component: ChurchCardComponent;
  let fixture: ComponentFixture<ChurchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
