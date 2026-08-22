import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice1 } from './practice1';

describe('Practice1', () => {
  let component: Practice1;
  let fixture: ComponentFixture<Practice1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
