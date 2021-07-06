import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGENOTFOUNDComponent } from './pagenotfound.component';

describe('PAGENOTFOUNDComponent', () => {
  let component: PAGENOTFOUNDComponent;
  let fixture: ComponentFixture<PAGENOTFOUNDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAGENOTFOUNDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAGENOTFOUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
