import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [AppComponent, OperationsComponent, ReadComponent, DeleteComponent, FoodComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
