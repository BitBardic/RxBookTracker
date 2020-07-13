import { fromEvent, interval, Observable, of, throwError, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap } from 'rxjs/operators';

let source$ = interval(1000).pipe(
    take(4)
);

let subject$ = new Subject();
source$.subscribe(subject$);

subject$.subscribe(
    value => console.log(`Observer 1: ${value}`)
);

setTimeout(() => {
    subject$.subscribe(
        value => console.log(`Observer 2: ${value}`)
    );
}, 1000);

setTimeout(() => {
    subject$.subscribe(
        value => console.log(`Observer 3: ${value}`)
    );
}, 2000);