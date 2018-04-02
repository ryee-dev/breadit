import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubbreadditComponent } from './create-subbreaddit.component';

describe('CreateSubbreadditComponent', () => {
  let component: CreateSubbreadditComponent;
  let fixture: ComponentFixture<CreateSubbreadditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubbreadditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubbreadditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
