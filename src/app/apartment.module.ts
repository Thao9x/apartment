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
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';

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
        TableModule,
        PasswordModule,
        InputTextModule,
        CheckboxModule,
        BadgeModule
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
        ClickOutsideDirective,
        PasswordModule,
        InputTextModule,
        CheckboxModule,
        BadgeModule
    ],
    providers: [DynamicDialogConfig, DynamicDialogRef],
})
export class ApartmentModule { }
