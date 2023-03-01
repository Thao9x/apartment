import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ClickOutsideDirective } from './common/directive/click-outside.directive';

@NgModule({
    declarations: [
        ClickOutsideDirective
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        ChartModule,
        TableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        ChartModule,
        TableModule,
        ClickOutsideDirective
    ],
    providers: [DynamicDialogConfig, DynamicDialogRef],
})
export class ApartmentModule { }
