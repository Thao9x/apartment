import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApartment } from 'src/app/common/common-apartment';
import { ValidatorCommon } from 'src/app/common/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CommonApartment implements OnInit {

  public formGroupLogin: FormGroup = new FormGroup({});
  public valuesValidators = ["email", "password"];

  constructor(
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  get f() {
    return this.formGroupLogin.controls;
  }

  initFormGroup() {
    this.formGroupLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    this.submit = true;
    ValidatorCommon.setValidatorFormGroup(this.formGroupLogin, this.valuesValidators);
    if (this.formGroupLogin.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }


}
