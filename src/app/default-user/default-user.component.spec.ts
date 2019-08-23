import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultUserComponent } from './default-user.component';

describe('DefaultUserComponent', () => {
  let component: DefaultUserComponent;
  let fixture: ComponentFixture<DefaultUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
