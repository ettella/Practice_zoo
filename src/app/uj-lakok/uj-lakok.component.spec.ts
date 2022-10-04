import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjLakokComponent } from './uj-lakok.component';

describe('UjLakokComponent', () => {
  let component: UjLakokComponent;
  let fixture: ComponentFixture<UjLakokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjLakokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UjLakokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
