import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokkerDetailsPage } from './kokker-details.page';

describe('KokkerDetailsPage', () => {
  let component: KokkerDetailsPage;
  let fixture: ComponentFixture<KokkerDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokkerDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokkerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
