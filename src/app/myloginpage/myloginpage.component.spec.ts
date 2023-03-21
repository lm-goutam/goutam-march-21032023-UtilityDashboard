import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloginpageComponent } from './myloginpage.component';

describe('MyloginpageComponent', () => {
  let component: MyloginpageComponent;
  let fixture: ComponentFixture<MyloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyloginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
