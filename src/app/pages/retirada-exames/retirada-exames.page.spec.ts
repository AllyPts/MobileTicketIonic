import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetiradaExamesPage } from './retirada-exames.page';

describe('RetiradaExamesPage', () => {
  let component: RetiradaExamesPage;
  let fixture: ComponentFixture<RetiradaExamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
