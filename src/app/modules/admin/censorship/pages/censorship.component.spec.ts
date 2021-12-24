import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensorshipComponent } from './censorship.component';

describe('CensorshipComponent', () => {
  let component: CensorshipComponent;
  let fixture: ComponentFixture<CensorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
