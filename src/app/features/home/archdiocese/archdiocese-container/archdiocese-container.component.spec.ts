import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchdioceseContainerComponent } from './archdiocese-container.component';

describe('ArchdioceseContainerComponent', () => {
  let component: ArchdioceseContainerComponent;
  let fixture: ComponentFixture<ArchdioceseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchdioceseContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchdioceseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
