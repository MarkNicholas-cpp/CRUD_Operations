import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { InsertedSuccess, Read, StudentDetails } from '../student-details';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: StudentDetails = {
    Name: '',
    RollNumber: '',
  };
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(RollNumber: String, Details: StudentDetails) {
    this.Service.Update(RollNumber, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(Roll: String) {
    this.Service.Delete(Roll).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}
