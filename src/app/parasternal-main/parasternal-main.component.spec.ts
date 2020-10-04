import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasternalMainComponent } from './parasternal-main.component';

describe('ParasternalMainComponent', () => {
  let component: ParasternalMainComponent;
  let fixture: ComponentFixture<ParasternalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParasternalMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasternalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
