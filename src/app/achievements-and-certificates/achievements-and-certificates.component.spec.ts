import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAndCertificatesComponent } from './achievements-and-certificates.component';

describe('AchievementsAndCertificatesComponent', () => {
  let component: AchievementsAndCertificatesComponent;
  let fixture: ComponentFixture<AchievementsAndCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsAndCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsAndCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
