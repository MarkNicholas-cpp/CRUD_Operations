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
  SuccessMsg = "";
  Insert() {
    this.Service.Insert(this.User).subscribe((Data:any)=>{
      if(Data){
        this.SuccessMsg = Data.Message; //Update the SuccessMsg String if the Responce is Success..So that will be clear to the User that the Operation of the insert is Success
      }
      else{
        console.log("Error Fetching Data");
      }
    });
  }
}
