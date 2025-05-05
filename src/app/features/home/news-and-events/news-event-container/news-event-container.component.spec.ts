import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventContainerComponent } from './news-event-container.component';

describe('NewsEventContainerComponent', () => {
  let component: NewsEventContainerComponent;
  let fixture: ComponentFixture<NewsEventContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEventContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
