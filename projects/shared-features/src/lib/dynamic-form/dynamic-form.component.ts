import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  employeeForm!: FormGroup;
  @Input() formData:any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.formData)
    // Initialize the form on component initialization
    this.employeeForm = this.formBuilder.group({});
    this.createFormControls();
  }

  createFormControls(): void {
    // Function to dynamically create form controls based on form data
    for (const fieldSet of this.formData.formFields) {
      for (const field of fieldSet.fields) {
        const validators = [];
        // Add required validator
        if (field.validations && field.validations.isRequired) {
          validators.push(Validators.required);
        }
        // Add pattern validator
        if (field.validations && field.validations.pattern) {
          validators.push(Validators.pattern(field.validations.pattern));
        }
          // Add form control to the form group
          this.employeeForm.addControl(field.name, this.formBuilder.control('', validators));
      }
    }
  }
  // Function to handle form submission
  saveForm(): void {
    if (this.employeeForm.valid) {
      console.log('Form submitted:', this.employeeForm.value);
    } else {
      // If form is invalid, mark all fields as touched to display errors
      this.markFormGroupTouched(this.employeeForm);
    }
  }
  // Function to reset form and mark all fields as untouched
  resetForm(): void {
    this.employeeForm.reset();
    this.markFormGroupUntouched(this.employeeForm);
  }
  // Function to mark form group and nested form groups as touched
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  //Function to mark form group and nested form groups as untouched
  markFormGroupUntouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsUntouched();
      if (control instanceof FormGroup) {
        this.markFormGroupUntouched(control);
      }
    });
  }
}
