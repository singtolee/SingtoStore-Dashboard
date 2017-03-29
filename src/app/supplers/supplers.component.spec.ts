import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplersComponent } from './supplers.component';

describe('SupplersComponent', () => {
  let component: SupplersComponent;
  let fixture: ComponentFixture<SupplersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
