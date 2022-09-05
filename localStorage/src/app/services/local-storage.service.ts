import { CouponData } from './../models/coupon-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveCouponData(key: string, value: CouponData) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getCouponData(key: string) {
    return localStorage.getItem(key);
  }
}
