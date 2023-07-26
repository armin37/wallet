import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WInputComponent } from './w-input.component';

describe('WInputComponent', () => {
  let component: WInputComponent;
  let fixture: ComponentFixture<WInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WInputComponent]
    });
    fixture = TestBed.createComponent(WInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
