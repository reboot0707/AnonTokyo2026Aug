import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice082901 } from './practice082901';

describe('Practice082901', () => {
  let component: Practice082901;
  let fixture: ComponentFixture<Practice082901>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice082901]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice082901);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
