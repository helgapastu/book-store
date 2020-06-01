import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from './books.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {
  book: Book;
  books: Book[];
  keyWord: string = '';
  hoverIndex: number;
  editMode: boolean = false;

  constructor(private booksService: BooksService) { }
 
  ngOnInit() {
    this.booksService.loadBooks().subscribe((books: Book[]) => {
      this.books = books;
      this.booksService.set(this.books);
      this.resetBook();
    });
  }

  public deleteBook(index: number): void {
    this.books.splice(index, 1);

    this.booksService.set(this.books);
  }

  public submitBook(): void {
    this.books = this.booksService.get();

    if (!Array.isArray(this.book.images)) {
      this.book.images = this.book.images.split(',').map(img => img.trim());
    }

    if (!this.book.id) {
      this.book.id = (new Date()).getTime();
      this.books.push(this.book);
    } else {
      this.books = this.books.map(book => book.id === this.book.id ? this.book : book);
    }

    this.booksService.set(this.books);
    this.toggleEditMode();
    this.resetBook();
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  public back(): void {
    this.resetBook();
    this.toggleEditMode();
  }

  public editBook(book: Book): void {
    this.book = book;
    this.toggleEditMode();
  }

  public filterBooks(keyWord: string): void {
    this.books = this.booksService.get().filter(item => item.title.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1);
  }

  public nextPhoto(book: Book): void {
    if (book.displayedImg + 1 <= book.images.length - 1) {
      book.displayedImg++;
    }
  }

  public prevPhoto(book: Book): void {
    if (book.displayedImg - 1 >= 0) {
      book.displayedImg--;
    }
  }

  private resetBook(): void {
    this.keyWord = '';

    this.book = {
      id: null,
      title: '',
      author: '',
      date: '',
      publisher: '',
      address: '',
      phone: '',
      category: '',
      images: '',
      displayedImg: 0
    };

    this.books = this.booksService.get();
  }
}
