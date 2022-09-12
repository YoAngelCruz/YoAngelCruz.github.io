import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndCompetencesComponent } from './skills-and-competences.component';

describe('SkillsAndCompetencesComponent', () => {
  let component: SkillsAndCompetencesComponent;
  let fixture: ComponentFixture<SkillsAndCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndCompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAndCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
