import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaxComponent } from './dax.component';

describe('DaxComponent', () => {
  let component: DaxComponent;
  let fixture: ComponentFixture<DaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
