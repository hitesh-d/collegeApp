import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StudentsService {

  constructor(private http : Http) { }


  getStudents() {
    return this.http.get('https://college-info-2f667.firebaseio.com/studentInfo.json')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

}
