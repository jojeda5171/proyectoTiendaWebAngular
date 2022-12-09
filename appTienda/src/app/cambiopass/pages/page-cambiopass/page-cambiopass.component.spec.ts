import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCambiopassComponent } from './page-cambiopass.component';

describe('PageCambiopassComponent', () => {
  let component: PageCambiopassComponent;
  let fixture: ComponentFixture<PageCambiopassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCambiopassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCambiopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
