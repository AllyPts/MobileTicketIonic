import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SenhaPrioritariaPage } from './senha-prioritaria.page';

describe('SenhaPrioritariaPage', () => {
  let component: SenhaPrioritariaPage;
  let fixture: ComponentFixture<SenhaPrioritariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaPrioritariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
