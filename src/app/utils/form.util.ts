import { AbstractControl, FormGroup } from "@angular/forms";

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
    export function InValid(control: AbstractControl) {
        if (!control) {
            return false;
        }
        return control.invalid && (control.dirty || control.touched);
    }
}