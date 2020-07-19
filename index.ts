import { fromEvent, interval, Observable, of, throwError, Subject,
         asyncScheduler, asapScheduler, queueScheduler, merge, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap,
         multicast, refCount, publish, share, publishLast, publishBehavior, publishReplay, observeOn } from 'rxjs/operators';

// Describing Observable events with marble syntax

let source$ = helpers.cold('-a-b-c');

let source$ = helpers.cold('--a-4---c-8|');

let source$ = helpers.cold('  --a-4 12ms c-8#');

let source$ = helpers.hot('-a-^-b-(cde)---f|');

// Describing subscriptions with marble syntax

let subscription = '^---!';

let subscription = '--^-';

let subscription = '^ 10ms !';