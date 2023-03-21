import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntgUpdateComponent } from './intg-update.component';

describe('IntgUpdateComponent', () => {
  let component: IntgUpdateComponent;
  let fixture: ComponentFixture<IntgUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntgUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntgUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
