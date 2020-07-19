import { fromEvent, interval, Observable, of, throwError, Subject,
         asyncScheduler, asapScheduler, queueScheduler, merge, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap,
         multicast, refCount, publish, share, publishLast, publishBehavior, publishReplay, observeOn } from 'rxjs/operators';

