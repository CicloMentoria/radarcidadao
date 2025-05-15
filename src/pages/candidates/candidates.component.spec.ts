import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadidatesComponent } from './candidates.component';

describe('CadidatesComponent', () => {
  let component: CadidatesComponent;
  let fixture: ComponentFixture<CadidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
