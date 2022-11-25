import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOptionsHelpComponent } from './dialog-options-help.component';

describe('DialogOptionsHelpComponent', () => {
  let component: DialogOptionsHelpComponent;
  let fixture: ComponentFixture<DialogOptionsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOptionsHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOptionsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
