import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';
import { VendorComponent } from './vendor/vendor.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const appRoutes: Routes = [
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/Login',
        // redirectTo: '/App/Version',
        pathMatch: 'full'
    },
    {
        path: 'Core',
        component: CoreComponent,
        children: [{
            path: "",
            children: [
                {
                    path: '',
                    component: HomeComponent,
                }, {
                    path: 'Inventory',
                    component: InventoryComponent,

                }, {
                    path: 'Order',
                    component: OrderComponent
                }, {
                    path: 'Vendor',
                    component: VendorComponent
                }, {
                    path: 'Warehouse',
                    component: WarehouseComponent
                }
            ]
        }]
    },
    {
        path: '**',
        redirectTo: 'Core',
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });