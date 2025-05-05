import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRadioContainerComponent } from './office-radio-container.component';

describe('OfficeRadioContainerComponent', () => {
  let component: OfficeRadioContainerComponent;
  let fixture: ComponentFixture<OfficeRadioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeRadioContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeRadioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
