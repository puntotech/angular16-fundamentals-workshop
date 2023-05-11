import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const VALID_NAME = ["hulk", "joker", "superman", "bionic woman", "cat woman"];

export function heroNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !VALID_NAME.includes(control.value.toLowerCase());
    return forbidden ? { heroNameValid: { value: control.value } } : null;
  };
}
