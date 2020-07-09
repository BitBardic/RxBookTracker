import { of } from 'rxjs';

// subscribing with callbacks

let sourceObservable$ = of(1, 3, 5);

sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`),
    err => console.log(`Error: ${err}`),
    () => console.log(`All done producing values.`)
);

sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`),
    err => console.log(`Error: ${err}`),
);

sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`)
);
