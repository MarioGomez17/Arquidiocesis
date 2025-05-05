import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesContainerComponent } from './functionalities-container.component';

describe('FunctionalitiesContainerComponent', () => {
  let component: FunctionalitiesContainerComponent;
  let fixture: ComponentFixture<FunctionalitiesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalitiesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
