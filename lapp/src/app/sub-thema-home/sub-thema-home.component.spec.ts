import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThemaHomeComponent } from './sub-thema-home.component';

describe('SubThemaHomeComponent', () => {
  let component: SubThemaHomeComponent;
  let fixture: ComponentFixture<SubThemaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThemaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubThemaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
