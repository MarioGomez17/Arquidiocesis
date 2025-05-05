import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRadioTitleComponent } from './office-radio-title.component';

describe('OfficeRadioTitleComponent', () => {
  let component: OfficeRadioTitleComponent;
  let fixture: ComponentFixture<OfficeRadioTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeRadioTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeRadioTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
