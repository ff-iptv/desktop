import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImageComponent } from './box-image.component';

describe('BoxImageComponent', () => {
  let component: BoxImageComponent;
  let fixture: ComponentFixture<BoxImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
