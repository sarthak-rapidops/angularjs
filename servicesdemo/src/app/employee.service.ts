import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
@Injectable()
export class EmployeeService {

  private _url: string= '/assets/data/employee.json'
  constructor(private http: HttpClient) { }
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message || "Server Error")
  }
}
