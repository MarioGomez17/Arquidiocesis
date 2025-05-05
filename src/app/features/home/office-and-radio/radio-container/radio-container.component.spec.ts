import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioContainerComponent } from './radio-container.component';

describe('RadioContainerComponent', () => {
  let component: RadioContainerComponent;
  let fixture: ComponentFixture<RadioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
