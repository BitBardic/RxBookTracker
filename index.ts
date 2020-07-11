import { fromEvent, interval, Observable, of, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError } from 'rxjs/operators';


ajax('/api/errors/500')
    .pipe(
        mergeMap(ajaxResponse => ajaxResponse.response),
        filter(book => book.publicationYear < 1950),
        tap(oldBook => console.log(`Title: ${oldBook.title}`)),
        //catchError(err => of({title: 'Corduroy', author: 'Don Freeman'})),
        //catchError((err, caught) => caught),
        //catchError(err => throw `Something bad happened - ${err.message}`),
        catchError(err => return throwError(err.message))
    )
    .subscribe(
        finalValue => console.log(`VALUE: ${finalValue.title}`),
        error => console.log(`ERROR: ${error}`)
    );

