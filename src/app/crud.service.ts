import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './student-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Students/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(RollNumber: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Students/Read${RollNumber}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Students/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Students/Delete${RollNumber}`
    );
  }
  Update(RollNumber: String, Details: StudentDetails) {
    return this.http.put(`${this.url}Students/Update${RollNumber}`, Details, {
      headers: this.headers,
    });
  }
}
