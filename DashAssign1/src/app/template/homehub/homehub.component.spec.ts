import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehubComponent } from './homehub.component';

describe('HomehubComponent', () => {
  let component: HomehubComponent;
  let fixture: ComponentFixture<HomehubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomehubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
