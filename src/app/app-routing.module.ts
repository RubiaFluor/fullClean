import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesSellerViewComponent } from './modules/sales-seller-view/sales-seller-view.component';

const routes: Routes = [
  {path: 'sales-seller', component:SalesSellerViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
