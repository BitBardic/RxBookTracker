import { fromEvent, from, of, Observable, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

let books$ = from(allBooks);

let bookObserver = {
    next: book => console.log(`Title: ${book.title}`),
    error: err => console.log(`Error: ${err}`),
    complete: () => console.log(`All done!`)
};

books$.subscribe(bookObserver);




