import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTitileComponent } from './footer-titile.component';

describe('FooterTitileComponent', () => {
  let component: FooterTitileComponent;
  let fixture: ComponentFixture<FooterTitileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTitileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTitileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
