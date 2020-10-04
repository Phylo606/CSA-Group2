import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasternalDetailComponent } from './parasternal-detail.component';

describe('ParasternalDetailComponent', () => {
  let component: ParasternalDetailComponent;
  let fixture: ComponentFixture<ParasternalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParasternalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasternalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
