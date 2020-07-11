import { fromEvent, interval, Observable, of, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';


let timesDiv = document.getElementById('times');
let button = document.getElementById('timerButton');

// let timer$ = interval(1000);

let timer$ = new Observable(subscribe => {
    let i = 0;
    let intervalID = setInterval(() => {
        subscribe.next(i++);
    }, 1000);

    return () => {
        console.log(`Executing teardown code.`);
        clearInterval(intervalID);
    }
});

let cancelTimer$ = fromEvent(button, 'click');

timer$.pipe(
    takeUntil(cancelTimer$)
)
.subscribe(
    value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
    null,
    () => console.log('All done!')
);

