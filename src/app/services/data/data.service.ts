import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getData(url): Observable<any[]> {
    return this.http.get<any[]>(url)
  }

  shuffle(input){
    var data = input.slice(0);
    var counter = data.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = data[counter];
        data[counter] = data[index];
        data[index] = temp;
    }
    return data;
  }

  getKeys(data) {
      var arr = new Array();
      for (var key in data) {
          arr.push(key);
      }
      return arr;
  };

  //http://blog.corrlabs.com/2011/02/shuffling-object-properties-in.html
  shuffleObj(data) {

      var new_obj = {};
      var keys = this.getKeys(data);
      keys = this.shuffle(keys);
      for (var key in keys) {
          new_obj[keys[key]] = data[keys[key]];
      }
      return new_obj;
  };
}
