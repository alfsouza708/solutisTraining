import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListarComponent } from './comic-listar.component';

describe('ComicListarComponent', () => {
  let component: ComicListarComponent;
  let fixture: ComponentFixture<ComicListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
