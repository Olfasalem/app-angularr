import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppareilComponent } from './my-appareil.component';

describe('MyAppareilComponent', () => {
  let component: MyAppareilComponent;
  let fixture: ComponentFixture<MyAppareilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppareilComponent]
    });
    fixture = TestBed.createComponent(MyAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
