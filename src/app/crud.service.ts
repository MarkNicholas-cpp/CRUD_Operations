import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { StudentDetails } from './student-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private http : HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Authentication': 'Bearer' + localStorage.getItem('token')
  });
  private url = 'http://localhost:3000/';
  
  Insert(Details:StudentDetails):Observable<{}>{
    console.log(this.url , Details);
    return this.http.post<{}>(this.url + "Students/Insert",Details,{headers:this.headers});
  }
}
