import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routes';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoreComponent,
    InventoryComponent,
    OrderComponent,
    WarehouseComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    BsDatepickerModule.forRoot(),
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
