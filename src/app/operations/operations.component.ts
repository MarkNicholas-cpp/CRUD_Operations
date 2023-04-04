import { Component, OnInit } from '@angular/core';
import { StudentDetails } from '../student-details';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent implements OnInit{
  constructor(private Service:CRUDService){}
  ngOnInit(){

  }
  User:StudentDetails = {
    Name: '',
    RollNumber: '',
  };
  Insert() {
    this.Service.Insert(this.User).subscribe((Data)=>{
      if(Data){
        console.log(Data);
      }
      else{
        console.log("Error Fetching Data");
      }
    });
    console.log(this.User);
  }
}
