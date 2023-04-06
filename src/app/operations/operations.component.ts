import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
} from '../student-details';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription;
  User: StudentDetails = {
    Name: '',
    RollNumber: '',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';



    this.Subscription = this.Service.Insert(this.User).subscribe(
      (data)=>{
        if(data){
          console.log(data);
        }
        else{
          console.log("Failed");
        }
      }
    )
  }


  
    // this.Subscription = this.Service.Insert(this.User).subscribe({
    //   next: (Data: InsertedSuccess | UniqueConstraintError) => {
    //     if ('errorNum' in Data) {
    //       this.ErrorMsg = `${this.User.RollNumber} alredy Exists`;
    //     } else {
    //       this.SuccessMsg = `${this.User.RollNumber} Inserted Succesfully`;
    //     }
    //   },
    //   error: (Error) => {
    //     console.log(Error);
    //   },
    // }); this the another syntax for the Subscribe Its advanced Handling everything

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
