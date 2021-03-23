import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
    selector: 'toast',
})
export class MyToastController {

    constructor(private toastController: ToastController) { }

    async openToast(message: string) {
        const toast = await this.toastController.create({
            position: 'top',
            color: 'success',
            message: message,
            duration: 2000,
        });
        toast.present();
    }
}