import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicaComponent } from './polica.component';

describe('PolicaComponent', () => {
  let component: PolicaComponent;
  let fixture: ComponentFixture<PolicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
