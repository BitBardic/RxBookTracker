import { fromEvent, interval, Observable, of, throwError, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap } from 'rxjs/operators';

let subject$ = new Subject();

subject$.subscribe(
    value => console.log(`Observer 1: ${value}`)
);

subject$.subscribe(
    value => console.log(`Observer 2: ${value}`)
);

subject$.next("Hello!");

let source$ = new Observable(subscriber => {
    subscriber.next('Greetings!');
});

source$.subscribe(subject$);