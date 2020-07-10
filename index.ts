import { fromEvent, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// manually applying an operator
let source$ = of(1, 2, 3, 4, 5);

let doubler = map<number, number>(value => value * 2);

let doubled$ = doubler(source$);

doubled$.subscribe(
    value => console.log(value)
);






