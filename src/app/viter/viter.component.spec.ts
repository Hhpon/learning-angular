import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViterComponent } from './viter.component';

describe('ViterComponent', () => {
  let component: ViterComponent;
  let fixture: ComponentFixture<ViterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
