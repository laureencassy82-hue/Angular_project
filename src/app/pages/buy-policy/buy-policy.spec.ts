import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  BuyPolicyComponent } from './buy-policy';

describe('BuyPolicy', () => {
  let component:  BuyPolicyComponent;
  let fixture: ComponentFixture< BuyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuyPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( BuyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
