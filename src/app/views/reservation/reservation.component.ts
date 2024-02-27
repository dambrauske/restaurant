import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReservationService } from '../../services/reservation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'lt-LT' },
    ReservationService,
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  selectedDay: Date | undefined = undefined;
  times: string[] = [
    '11:00',
    '11:30',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];
  guestsList: string[] = [
    '1 guest',
    '2 guests',
    '3 guests',
    '4 guests',
    '5 guests',
    '6 guests',
  ];
  selectedTime!: string;
  selectedGuestCount!: string;

  constructor(private reservationService: ReservationService) {}

  dateFilter(d: Date | null): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const monthAhead = new Date();
    monthAhead.setMonth(monthAhead.getMonth() + 1);
    if (d === null) return true;
    if (d >= today && d <= monthAhead) return true;
    return false;
  }

  valueChanged(event: any) {
    this.selectedDay = event.value;
    console.log(event.value);
  }

  reservationForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    guestsCount: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(12),
    ]),
    comment: new FormControl(''),
  });

  validatePhone(event: any) {
    const key = event.key;
    const validKeys = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!validKeys.includes(key)) {
      event.preventDefault();
    } else return;
  }

  onSubmit() {
    console.warn(this.reservationForm.controls);

    const data = {
      date: this.reservationForm.controls.date.value,
      time: this.reservationForm.controls.time.value,
      guestsCount: this.reservationForm.controls.guestsCount.value,
      comment: this.reservationForm.controls.comment.value,
      name: this.reservationForm.controls.name.value,
      phone: this.reservationForm.controls.phone.value,
    };

    this.reservationService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
