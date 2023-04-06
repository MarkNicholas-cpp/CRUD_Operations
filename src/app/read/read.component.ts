import { Component ,OnInit} from '@angular/core';
import { CRUDService } from '../crud.service';
import { InsertedSuccess, Read } from '../student-details';

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
  GotResult:Boolean = false;
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
  Delete(Roll:String){
    this.Service.Delete(Roll).subscribe(
      {
        next:(Data:InsertedSuccess)=>{
          console.log(Data.rowsAffected)
          this.Read("All");
        },
        error:(Error)=>{
          console.log(Error);
        }
      }
    )
  }
}
