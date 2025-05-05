import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiscopologioCardComponent } from './episcopologio-card.component';

describe('EpiscopologioCardComponent', () => {
  let component: EpiscopologioCardComponent;
  let fixture: ComponentFixture<EpiscopologioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpiscopologioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiscopologioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
