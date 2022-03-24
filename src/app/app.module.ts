import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { SalesSellerViewComponent } from './modules/sales-seller-view/sales-seller-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SalesSellerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
