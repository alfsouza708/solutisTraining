import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCadastrarComponent } from './comics-cadastrar.component';

describe('ComicsCadastrarComponent', () => {
  let component: ComicsCadastrarComponent;
  let fixture: ComponentFixture<ComicsCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
