import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WButtonComponent } from './w-button.component';

describe('WButtonComponent', () => {
  let component: WButtonComponent;
  let fixture: ComponentFixture<WButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WButtonComponent]
    });
    fixture = TestBed.createComponent(WButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
