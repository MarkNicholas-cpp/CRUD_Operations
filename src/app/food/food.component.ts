import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { Pizza } from '../student-details';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  constructor(private FoodService:CRUDService){

  }
  Pizza:any[any] = [];
  Pizzas(){
    this.FoodService.GetFood().subscribe(
      {
        next:(Data)=>{
          console.log(Data);
          this.Pizza = Data;
        },
        error:(Err)=>{
          console.log(Err);
        }
      }
    )
  }
}
