alert('Hello RxJs');
import { Observable, of, from, fromEvent } from 'rxjs';
import { allBooks, allReaders } from './data';

let source2$ = from(allBooks);

source2$.subscribe(book => console.log(book.title));
