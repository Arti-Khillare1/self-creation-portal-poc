import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCreationPortalDockComponent } from './self-creation-portal-dock.component';

describe('SelfCreationPortalDockComponent', () => {
  let component: SelfCreationPortalDockComponent;
  let fixture: ComponentFixture<SelfCreationPortalDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfCreationPortalDockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfCreationPortalDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
