import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaysService } from 'src/app/services/stays/stays.service';
import { StayModal } from './stay-modal';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [StayModal],
    providers: [StaysService]
})
export class StayModalModule { }
