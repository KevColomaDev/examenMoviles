import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksListPage } from './books-list.page';

describe('BooksListPage', () => {
  let component: BooksListPage;
  let fixture: ComponentFixture<BooksListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
