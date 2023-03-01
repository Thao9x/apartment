import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ApartmentModule } from '../apartment.module';
import { DashboardManagementRoutingModule } from './dashboard-management-route.module';
@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [CommonModule, ApartmentModule, DashboardManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        DashboardComponent
    ],
})
export class DashboardManagementModule { }
