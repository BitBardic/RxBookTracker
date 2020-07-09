import { fromEvent, from, of, Observable, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

let currentTime$ = new Observable(subscriber => {
    const timeString = new Date().toLocaleTimeString();
    subscriber.next(timeString);
    subscriber.complete();
});

currentTime$.subscribe(
    currentTime => console.log(`Observer 1: ${currentTime}`)
);

setTimeout(() => {
    currentTime$.subscribe(
        currentTime => console.log(`Observer 2: ${currentTime}`)
    );
}, 1000);

setTimeout(() => {
    currentTime$.subscribe(
        currentTime => console.log(`Observer 3: ${currentTime}`)
    );
}, 2000);




