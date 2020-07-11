import { fromEvent, interval, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError } from 'rxjs/operators';


ajax('/api/books')
    .pipe(
        mergeMap(ajaxResponse => ajaxResponse.response),
        filter(book => book.publicationYear < 1950),
        tap(oldBook => console.log(`Title: ${oldBook.title}`)),
        catchError(err => of({title: 'Corduroy', author: 'Don Freeman'}))
    )
    .subscribe(
        finalValue => console.log(`VALUE: ${finalValue.title}`),
        error => console.log(`ERROR: ${error}`)
    );

