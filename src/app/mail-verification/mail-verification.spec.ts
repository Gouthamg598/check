import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailVerification } from './mail-verification';

describe('MailVerification', () => {
  let component: MailVerification;
  let fixture: ComponentFixture<MailVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailVerification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
