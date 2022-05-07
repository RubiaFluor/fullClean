import { LoginUserComponent } from './modules/login/login-user/login-user.component';
import { MaintainerUserComponent } from './modules/maintainer/maintainer-user/maintainer-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesSellerViewComponent } from './modules/sales-seller-view/sales-seller-view.component';

const routes: Routes = [
  {path: 'login', component:LoginUserComponent},
  {path: 'sales-seller', component:SalesSellerViewComponent},
  {path: 'maintainer/maintainer-user', component:MaintainerUserComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
