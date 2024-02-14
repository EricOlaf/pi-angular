import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCardListComponent } from './pi-card-list.component';

describe('PiCardListComponent', () => {
  let component: PiCardListComponent;
  let fixture: ComponentFixture<PiCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
