import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Book {
  id: number,
  title: string,
  author: string,
  date: string,
  publisher: string,
  address: string,
  phone: string,
  category: string,
  images: string | string[],
  displayedImg: number,
}

const mock: Book[] = [
  {
    id: 1,
    title: 'Harry Potter and The Philosopher`s Stone',
    author: 'J. K. Rowling',
    date: '1997',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://images-na.ssl-images-amazon.com/images/I/51MjPyuVqRL._SX323_BO1,204,203,200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/815v2OuIHXL._SL1500_.jpg', 'https://book-ye.com.ua/upload/iblock/471/8fad670c_4255_11e8_80f3_000c29ae1566_dcc359dc_4255_11e8_80f3_000c29ae1566.jpg'],
    displayedImg: 0
  },
  {
    id: 2,
    title: 'Harry Potter and The Chamber of Secrets',
    author: 'J. K. Rowling',
    date: '1998',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://www.britishbook.ua/upload/iblock/610/610c3e0047cb4c8d1dbb004ec8a95f74.jpeg', 'https://images-na.ssl-images-amazon.com/images/I/5129aHuP9UL._AC_.jpg'],
    displayedImg: 0
  },
  {
    id: 3,
    title: 'Harry Potter and The Prisoner of Azkaban',
    author: 'J. K. Rowling',
    date: '1999',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://images-na.ssl-images-amazon.com/images/I/51t55KcM8pL._SX332_BO1,204,203,200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81VSuy8IfTL._AC_SL1500_.jpg'],
    displayedImg: 0
  },
  {
    id: 4,
    title: 'Harry Potter and The Goblet of Fire',
    author: 'J. K. Rowling',
    date: '2000',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg', 'https://image.isu.pub/190206191552-534ee2bfa62cbb57b94ecf2c3c3b1b40/jpg/page_1.jpg'],
    displayedImg: 0
  },
  {
    id: 5,
    title: 'Harry Potter and The Order of the Phoenix',
    author: 'J. K. Rowling',
    date: '2003',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://images-na.ssl-images-amazon.com/images/I/91TpLHDnuFL.jpg', 'https://cdn.europosters.eu/image/750/plastic-frame-harry-potter-order-of-the-phoenix-i69610.jpg'],
    displayedImg: 0
  },
  {
    id: 6,
    title: 'Harry Potter and The Half-Blood Prince',
    author: 'J. K. Rowling',
    date: '2005',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://book-ye.com.ua/upload/iblock/348/757d9ce5_4251_11e8_80f3_000c29ae1566_b965dfd9_4251_11e8_80f3_000c29ae1566.jpg', 'https://www.coverwhiz.com/content/Harry-Potter-And-The-Half-Blood-Prince.jpg'],
    displayedImg: 0
  },
  {
    id: 7,
    title: 'Harry Potter and The Deathly Hallows',
    author: 'J. K. Rowling',
    date: '2007',
    publisher: 'Bloomsbury Publishing (UK)',
    address: 'United Kingdom',
    phone: '34-34-555',
    category: 'Fantasy',
    images: ['https://book-ye.com.ua/upload/iblock/ecf/54c62b6e_4252_11e8_80f3_000c29ae1566_a7f94d61_4252_11e8_80f3_000c29ae1566.jpg', 'https://images.ua.prom.st/2099397632_w640_h640_poster-v-rame.jpg'],
    displayedImg: 0
  }
];

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = new BehaviorSubject<Book[]>(mock);

  constructor() { }

  get(): Book[] {
    return JSON.parse(localStorage.getItem('books'));
  }

  set(books: Book[]) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  loadBooks(): Observable<Book[]> {
    return this.books.asObservable();
  }
}
