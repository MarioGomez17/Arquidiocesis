import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArchdioceseInfoComponent } from './footer-archdiocese-info.component';

describe('FooterArchdioceseInfoComponent', () => {
  let component: FooterArchdioceseInfoComponent;
  let fixture: ComponentFixture<FooterArchdioceseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterArchdioceseInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterArchdioceseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
