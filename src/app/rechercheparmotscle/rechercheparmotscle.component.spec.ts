import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparmotscleComponent } from './rechercheparmotscle.component';

describe('RechercheparmotscleComponent', () => {
  let component: RechercheparmotscleComponent;
  let fixture: ComponentFixture<RechercheparmotscleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheparmotscleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheparmotscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
