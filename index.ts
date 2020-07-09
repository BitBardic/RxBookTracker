import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

let button = document.getElementById('readersButton');

let readersDiv = document.getElementById('readers');

fromEvent(button, 'click').subscribe((event) => {
  ajax('/api/readers').subscribe((ajaxResponse) => {
    console.log(ajaxResponse);
    let readers = ajaxResponse.response;

    let readerDiv = document.getElementById('readers');

    for (let reader of readers) {
      readerDiv.innerHTML += reader.name + '<br>';
    }
  });
});
