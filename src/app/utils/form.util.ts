import { FormGroup } from "@angular/forms";

export module FormUtil {
    export function ValidateAll(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
            control.updateValueAndValidity();
            if (control instanceof FormGroup) {
                ValidateAll(control);
            }
        });
    }
}