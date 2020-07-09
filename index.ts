alert('Hello RxJs');
import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';

let button = document.getElementById('readersButton');

let readersDiv = document.getElementById('readers');

fromEvent(button, 'click').subscribe((event) => {
  console.log(event);

  for (let reader of allReaders) {
    readersDiv.innerHTML += reader.name + '<br>';
  }
});
