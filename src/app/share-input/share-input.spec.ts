import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareInput } from './share-input';

describe('ShareInput', () => {
  let component: ShareInput;
  let fixture: ComponentFixture<ShareInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
