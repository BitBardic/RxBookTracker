import { fromEvent, interval, Observable, of, throwError, Subject,
         asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap,
         multicast, refCount, publish, share, publishLast, publishBehavior, publishReplay } from 'rxjs/operators';

console.log('Start Script.');

let queue$ = of('QueueScheduler (synchronous)', queueScheduler);

let asap$ = of('AsapScheduler (async micro task)', asapScheduler);

let async$ = of('AsyncScheduler (async task)', asyncScheduler);

merge(async$, asap$, queue$)
    .subscribe(
        value => console.log(value)
    );

console.log('End Script.');