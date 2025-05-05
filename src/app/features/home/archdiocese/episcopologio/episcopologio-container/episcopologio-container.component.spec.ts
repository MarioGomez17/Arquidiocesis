import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiscopologioContainerComponent } from './episcopologio-container.component';

describe('EpiscopologioContainerComponent', () => {
  let component: EpiscopologioContainerComponent;
  let fixture: ComponentFixture<EpiscopologioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpiscopologioContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiscopologioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
