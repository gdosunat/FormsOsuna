import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainListComponent } from './villain-list.component';

describe('VillainListComponent', () => {
  let component: VillainListComponent;
  let fixture: ComponentFixture<VillainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
