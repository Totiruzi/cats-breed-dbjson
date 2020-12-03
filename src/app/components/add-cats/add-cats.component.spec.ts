import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatsComponent } from './add-cats.component';

describe('AddCatsComponent', () => {
  let component: AddCatsComponent;
  let fixture: ComponentFixture<AddCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
