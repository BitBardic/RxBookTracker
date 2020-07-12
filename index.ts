import { fromEvent, interval, Observable, of, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil, flatMap } from 'rxjs/operators';

function grabAndLogClassics(year, log) {
    return source$ => {
        return new Observable(subscriber => {
            return source$.subscribe(
                book => {
                    if (book.publicationYear < year) {
                        subscriber.next(book);
                        if (log) {
                            console.log(`Classic: ${book.title}`);
                        }
                    }
                },
                err => subscriber.error(err),
                () => subscriber.complete()
            );
        });
    }
}

ajax('/api/books')
    .pipe(
        flatMap(ajaxResponse => ajaxResponse.response),
        // filter(book => book.publicationYear < 1950),
        // tap(oldBook => console.log(`Title: ${oldBook}`))
        grabAndLogClassics(1930, false)
    )
    .subscribe(
        finalValue => console.log(`VALUE: ${finalValue.title}`),
        error => console.log(`ERROR: ${error}`)
    );

