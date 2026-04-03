import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SenhaGeralPage } from './senha-geral.page';

describe('SenhaGeralPage', () => {
  let component: SenhaGeralPage;
  let fixture: ComponentFixture<SenhaGeralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
