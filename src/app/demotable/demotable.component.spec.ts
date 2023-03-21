import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotableComponent } from './demotable.component';

describe('DemotableComponent', () => {
  let component: DemotableComponent;
  let fixture: ComponentFixture<DemotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemotableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
