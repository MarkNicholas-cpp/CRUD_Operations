import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { OperationsComponent } from './operations/operations.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"Read"}
  ,{path:'Read',component: ReadComponent},
  {path:'Insert',component:OperationsComponent}
  ,{path:'Delete',component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
