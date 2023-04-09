import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillainFormComponent } from './add-villain-form.component';

describe('AddVillainFormComponent', () => {
  let component: AddVillainFormComponent;
  let fixture: ComponentFixture<AddVillainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVillainFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVillainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
