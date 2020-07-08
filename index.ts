alert('Hello RxJs');
import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';

let source1$ = of('hello', 10, true, allReaders[0].name);

let source2$ = from(allBooks);

concat(source1$, source2$)
    .subscribe(value => console.log(value));
