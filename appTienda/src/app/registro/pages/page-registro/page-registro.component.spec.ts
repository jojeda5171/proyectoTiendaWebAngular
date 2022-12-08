import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistroComponent } from './page-registro.component';

describe('PageRegistroComponent', () => {
  let component: PageRegistroComponent;
  let fixture: ComponentFixture<PageRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
