import { Injectable } from '@angular/core';
import { Booking } from './bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'd065d6d55dbe4052a14524827775db69',
      placeId: '67f1ca31a2a34016a5ab656fe1b384fa',
      userId: 'gautam',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 3
    }
  ]
  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
