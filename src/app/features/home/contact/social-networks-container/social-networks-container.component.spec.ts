import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksContainerComponent } from './social-networks-container.component';

describe('SocialNetworksContainerComponent', () => {
  let component: SocialNetworksContainerComponent;
  let fixture: ComponentFixture<SocialNetworksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetworksContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
