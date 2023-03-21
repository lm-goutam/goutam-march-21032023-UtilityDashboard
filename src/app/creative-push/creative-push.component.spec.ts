import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativePushComponent } from './creative-push.component';

describe('CreativePushComponent', () => {
  let component: CreativePushComponent;
  let fixture: ComponentFixture<CreativePushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativePushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
