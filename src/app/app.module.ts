import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';
import { AuthGuard } from './auth.service';
import { AddressesComponent } from './addresses/addresses.component';
import { SupplersComponent } from './supplers/supplers.component';

export const fbConfig = {
  apiKey: "AIzaSyCOL_GgaWIYbQAdSvZzF0RH9w8nnQRG_jU",
  authDomain: "aomai-f24a2.firebaseapp.com",
  databaseURL: "https://aomai-f24a2.firebaseio.com",
  storageBucket: "aomai-f24a2.appspot.com",
  messagingSenderId: "1050288730700"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    OrdersComponent,
    DashboardComponent,
    AddressesComponent,
    SupplersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fbConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
