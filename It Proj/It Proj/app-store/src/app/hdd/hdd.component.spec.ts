import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HddComponent } from './hdd.component';

describe('HddComponent', () => {
  let component: HddComponent;
  let fixture: ComponentFixture<HddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
