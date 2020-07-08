alert('Hello RxJs');
import { Observable } from 'rxjs';
import { allBooks } from './data';

function subscribe(subscriber) {
  for (let book of allBooks) {
    subscriber.next(book);
  }
}

let allBooksObservable$ = new Observable(subscribe);

// An observable is not executed until an object subscribes to it.

allBooksObservable$.subscribe((book) => console.log(book.title));
