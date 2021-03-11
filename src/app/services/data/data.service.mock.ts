import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() { }

  getData(url): Observable<any[]> {
    return of([]);
  }
  shuffle(input){
    let data = input.slice(0);
    let counter = data.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = data[counter];
        data[counter] = data[index];
        data[index] = temp;
    }
    return data;
  }

  getKeys(data) {
      let arr = new Array();
      for (let key in data) {
          arr.push(key);
      }
      return arr;
  };

  randomFromRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  };
  //http://blog.corrlabs.com/2011/02/shuffling-object-properties-in.html
  shuffleObj(data) {

      let new_obj = {};
      let keys = this.getKeys(data);
      keys = this.shuffle(keys);
      for (let key in keys) {
          new_obj[keys[key]] = data[keys[key]];
      }
      return new_obj;
  };
}
