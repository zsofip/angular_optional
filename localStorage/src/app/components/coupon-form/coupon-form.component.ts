import { CouponData } from './../../models/coupon-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {

@Output() couponDataEmitter: EventEmitter<CouponData> = new EventEmitter<CouponData>();

@Input() storedCouponData?: CouponData;

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
    if(this.storedCouponData) {
      const {fullName, email, phoneNumber, coupon} = this.storedCouponData;
      this.couponForm.patchValue({
        fullName,
        email,
        phoneNumber,
        coupon
      })
    }
    console.log('stored:', this.storedCouponData);
    console.log('form:', this.couponForm.value);

  }

  get fullName(): FormControl {
    return this.couponForm.get('fullName') as FormControl;
  }

  get email(): FormControl {
    return this.couponForm.get('email') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.couponForm.get('phoneNumber') as FormControl;
  }

  get coupon(): FormControl {
    return this.couponForm.get('coupon') as FormControl;
  }

  onSubmit(): void {
    // console.log('form:', this.couponForm);
    const couponData: CouponData = this.couponForm.value as CouponData;
    this.couponDataEmitter.emit(couponData);
    // console.log('emitted data:', couponData);
  }

  clearForm() {
    const couponData: CouponData = this.couponForm.value as CouponData;
    this.couponForm.reset();
    this.couponDataEmitter.emit(couponData);
  }

}
