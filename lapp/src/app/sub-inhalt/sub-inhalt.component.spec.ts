import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInhaltComponent } from './sub-inhalt.component';

describe('SubInhaltComponent', () => {
  let component: SubInhaltComponent;
  let fixture: ComponentFixture<SubInhaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubInhaltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubInhaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
