import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'lt-LT' },
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  selectedDay: Date | null = null;
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
  guestsList: string[] = ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests']
  selectedTime!: string;
  selectedGuestCount!: string;

  constructor() {}

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
    console.log(event);
    
  }

  reservationForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    guestsCount: new FormControl('', Validators.required),
    comment: new FormControl('')
  });

  onSubmit() {
    console.warn(this.reservationForm)
  }
}
