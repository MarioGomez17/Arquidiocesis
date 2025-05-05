import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchsContainerComponent } from './churchs-container.component';

describe('ChurchsContainerComponent', () => {
  let component: ChurchsContainerComponent;
  let fixture: ComponentFixture<ChurchsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
