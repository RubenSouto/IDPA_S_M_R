import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThemaComponent } from './sub-thema.component';

describe('SubThemaComponent', () => {
  let component: SubThemaComponent;
  let fixture: ComponentFixture<SubThemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubThemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
