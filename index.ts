import { fromEvent, interval, Observable, of, throwError, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap,
         multicast, refCount, publish, share } from 'rxjs/operators';

let source$ = interval(1000).pipe(
    take(4),
    multicast(new Subject()),
    refCount()
);

// let subject$ = new Subject();
// source$.subscribe(subject$);

source$.subscribe(
    value => console.log(`Observer 1: ${value}`)
);

setTimeout(() => {
    source$.subscribe(
        value => console.log(`Observer 2: ${value}`)
    );
}, 1000);

setTimeout(() => {
    source$.subscribe(
        value => console.log(`Observer 3: ${value}`)
    );
}, 2000);

setTimeout(() => {
    source$.subscribe(
        value => console.log(`Observer 4: ${value}`)
        null,
        () => console.log('Observer 4 complete.')
    );
}, 4500);

// source$.connect();