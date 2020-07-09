import { of, Observable } from 'rxjs';

// Observables vs. Observers vs. Subscribers
let myNumbers = [1, 3, 5];

let numberObservable$ = new Observable(subscriber => {
    
    if (myNumbers.length === 0) { subscriber.error('No values'); }

    for (let num of myNumbers) {
        subscriber.next(num);
    }

    subscriber.complete();
});

let myObserver = {
    next: value => console.log(`Value produced: ${value}`),
    error: err => console.log(`Error: ${err}`),
    complete: () => console.log(`All done!`)
};

numberObservable$.subscribe(myObserver);


