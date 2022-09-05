import { CouponData } from './models/coupon-data';
import { LocalStorageService } from './services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localStorage';

  couponData?: CouponData;
  newCouponData?: CouponData;

  constructor(private localStService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.couponData = JSON.parse(this.localStService.getCouponData("couponData") || '{}')
  }

  saveNewCoupon(newCouponData: CouponData) {
    // console.log('arrived data:', this.couponData);
    this.localStService.saveCouponData("couponData", newCouponData)
  }
}
