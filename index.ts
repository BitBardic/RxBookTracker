alert('Hello RxJs');
import { Observable } from 'rxjs';
import { allBooks } from './data';

let allBooksObservable$ = new Observable((subscriber) => {
  if (document.title !== 'RxBookTracker') {
    subscriber.error('Incorrect page title.');
  }

  for (let book of allBooks) {
    subscriber.next(book);
  }

  setTimeout(() => {
    subscriber.complete();
  }, 2000);

  return () => console.log('Executing teardown code.');
  
});

// An observable is not executed until an object subscribes to it.

allBooksObservable$.subscribe((book) => console.log(book.title));
