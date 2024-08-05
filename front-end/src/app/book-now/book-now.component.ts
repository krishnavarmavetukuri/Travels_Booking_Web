import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {

    firstName: '';
    lastName: '';
    country: '';
    email: '';
    phoneNumber: '';
    payment: '';

  constructor(private http: HttpClient) {}
  ngOnInit(): void
  {
  }
  countryPrices = {
    'Singapore':'20000',
     'Andaman' :'10000',
     'Dubai' :'30000',
     'Bangkok' :'25000',
     'Italy' :'100000',
    'Malaysia' :'50000' 
  };
  updatePayment() {
    
    this.payment = this.countryPrices[this.country];
  }

  // bookNow() {
  //   this.http.post('http://localhost:9992/booking/create', this.booking).subscribe(
  //     (response: any) => {
  //       if (response.status) {
  //         alert('Booking created successfully!');
  //       } else {
  //         alert('Booking failed: ' + response.message);
  //       }
  //     },
  //     error => {
  //       console.error('Error during booking:', error);
  //       alert('Error during booking. Please check your server.');
  //     }
  //   );
  // }
  bookNow() {
    const bodyData = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "country": this.country,
      "email": this.email,
      "phoneNumber": this.phoneNumber,
      "payment": this.payment,
    };

    this.http.post("http://localhost:9992/booking/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Booking Successful");
    },
    (error) => {
      console.error('Error during booking:', error);
      alert('Error during booking. Please check your server.');
    }
  );
}

  
}
