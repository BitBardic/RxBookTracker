import { fromEvent, interval, Observable, of, throwError, Subject,
         asyncScheduler, asapScheduler, queueScheduler, merge, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap,
         multicast, refCount, publish, share, publishLast, publishBehavior, publishReplay, observeOn } from 'rxjs/operators';

console.log('Start Script.');

from([1,2,3,4], queueScheduler).pipe(
    tap(value => console.log(`Value: ${value}`)),
    observeOn(asyncScheduler),
    tap(value => console.log(`Doubled value: ${value * 2}`))
)
.subscribe();

console.log('End Script.');