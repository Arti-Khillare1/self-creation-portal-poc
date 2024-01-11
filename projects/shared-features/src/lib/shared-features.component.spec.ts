import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeaturesComponent } from './shared-features.component';

describe('SharedFeaturesComponent', () => {
  let component: SharedFeaturesComponent;
  let fixture: ComponentFixture<SharedFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
