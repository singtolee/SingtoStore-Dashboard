import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.service';
import { AddressesComponent } from './addresses/addresses.component';
import { SupplersComponent } from './supplers/supplers.component';

export const router:Routes=[
  { path:'',redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'product', component:ProductComponent,canActivate:[AuthGuard]},
  {path:'orders', component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'supplers', component:SupplersComponent,canActivate:[AuthGuard]},
  {path:'addresses', component:AddressesComponent,canActivate:[AuthGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
