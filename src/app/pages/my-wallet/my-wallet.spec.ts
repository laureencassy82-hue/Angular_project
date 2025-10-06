import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalletComponent } from './my-wallet';

describe('MyWallet', () => {
  let component: MyWalletComponent;
  let fixture: ComponentFixture<MyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
