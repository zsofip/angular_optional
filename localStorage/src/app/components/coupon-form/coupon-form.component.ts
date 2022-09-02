import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {
  couponForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.couponForm = fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.minLength(7)]],
      coupon: ['', [Validators.pattern(/s345/)]]
    })
  }

  ngOnInit(): void {
  }

  get fullName() {
    return this.couponForm.get('fullName');
  }

  get email() {
    return this.couponForm.get('email');
  }

  get phoneNumber() {
    return this.couponForm.get('phoneNumber');
  }

  get coupon() {
    return this.couponForm.get('coupon');
  }

  onSubmit(): void {
console.log(this.couponForm);

  }

}
