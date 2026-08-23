import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice4hook } from './practice4hook';

describe('Practice4hook', () => {
  let component: Practice4hook;
  let fixture: ComponentFixture<Practice4hook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice4hook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice4hook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
