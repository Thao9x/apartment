import { FormGroup, Validators } from "@angular/forms";

export class ValidatorCommon {
    static setValidatorFormGroup(formGroup: FormGroup, values: string[]) {
        for (const value of values) {
            formGroup.controls[value].setValidators([Validators.required]);
            formGroup.controls[value].updateValueAndValidity();
        }
    }
}