import { fromEvent, interval, Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


// chaining operators
let source$ = of(1, 2, 3, 4, 5);

source$.pipe(
    map(value => value * 2),
    filter(mappedValue => mappedValue > 5)
)
.subscribe(
    finalValue => console.log(finalValue)
);

