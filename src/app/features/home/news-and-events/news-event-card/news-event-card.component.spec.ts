import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventCardComponent } from './news-event-card.component';

describe('NewsEventCardComponent', () => {
  let component: NewsEventCardComponent;
  let fixture: ComponentFixture<NewsEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEventCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
