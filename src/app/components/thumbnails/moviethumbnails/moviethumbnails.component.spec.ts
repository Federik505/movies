import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviethumbnailsComponent } from './moviethumbnails.component';

describe('MoviethumbnailsComponent', () => {
  let component: MoviethumbnailsComponent;
  let fixture: ComponentFixture<MoviethumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviethumbnailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviethumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
