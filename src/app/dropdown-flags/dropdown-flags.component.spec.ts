import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFlagsComponent } from './dropdown-flags.component';

describe('DropdownFlagsComponent', () => {
  let component: DropdownFlagsComponent;
  let fixture: ComponentFixture<DropdownFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownFlagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
