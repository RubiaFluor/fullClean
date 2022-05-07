import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { SalesSellerViewComponent } from './modules/sales-seller-view/sales-seller-view.component';
import { ModalCommonComponent } from './common/modal-common/modal-common.component';
import { MaintainerProductsComponent } from './modules/maintainer/maintainer-products/maintainer-products.component';
import { InputComponent } from './common/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzTableModule } from 'ng-zorro-antd/table';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { LoginUserComponent } from './modules/login/login-user/login-user.component';
import { MaintainerUserComponent } from './modules/maintainer/maintainer-user/maintainer-user.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SalesSellerViewComponent,
    ModalCommonComponent,
    MaintainerProductsComponent,
    InputComponent,
    LoginUserComponent,
    MaintainerUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
