import { fromEvent, interval, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap } from 'rxjs/operators';


ajax('/api/books')
    .pipe(
        mergeMap(ajaxResponse => ajaxResponse.response),
        filter(book => book.publicationYear < 1950),
        tap(oldBook => console.log(`Title: ${oldBook.title}`))
    )
    .subscribe(
        finalValue => console.log(finalValue)
    );

