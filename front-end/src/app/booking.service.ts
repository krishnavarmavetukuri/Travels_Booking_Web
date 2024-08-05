// booking.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:9992'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Method to create a booking
  createBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/bookings/create`, bookingData);
  }

  // Method to retrieve bookings (if needed)
  // getBookings(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/bookings`);
  // }

  // Method to update a booking (if needed)
  // updateBooking(bookingId: string, updatedData: any): Observable<any> {
  //   return this.http.put<any>(`${this.baseUrl}/bookings/${bookingId}`, updatedData);
  // }

  // Method to delete a booking (if needed)
  // deleteBooking(bookingId: string): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/bookings/${bookingId}`);
  // }
}
