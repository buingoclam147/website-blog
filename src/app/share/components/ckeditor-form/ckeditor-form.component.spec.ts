import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorFormComponent } from './ckeditor-form.component';

describe('CkeditorFormComponent', () => {
  let component: CkeditorFormComponent;
  let fixture: ComponentFixture<CkeditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeditorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
