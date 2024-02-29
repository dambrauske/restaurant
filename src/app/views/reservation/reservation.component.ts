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
import { Time } from '../../models/restaurant';

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
  selectedDay!: String;
  times: Time[] = [];
  guestsCountList: number[] = [1, 2, 3, 4, 5, 6];
  selectedTime!: string;
  selectedGuestCount!: number;

  reservationForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl<Time | undefined>(undefined, Validators.required),
    guestsCount: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(12),
    ]),
    comment: new FormControl(''),
  });

  constructor(private reservationService: ReservationService) {
    this.reservationForm.get('time')?.valueChanges.subscribe((r) => {
      console.warn(r);
    });
  }

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
    this.reservationService
      .getAvailableTimes(this.selectedDay, this.selectedGuestCount)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.data) {
            res.data.forEach(
              (element: { time: string; tableNo: string; tableId: string }) => {
                const hasTime = this.times.some(
                  (obj) => obj['time'] === element.time
                );
                if (!hasTime) {
                  this.times.push(element);
                }
              }
            );
            console.log(this.times)
          }
        },
        error: (e) => console.error(e),
      });
  }

  validatePhone(event: any) {
    const key = event.key;

    const validKeys = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!validKeys.includes(key)) {
      event.preventDefault();
    } else return;
  }

  onSubmit() {
    console.warn(this.reservationForm.controls);

    const timeObject = this.reservationForm.get('time')?.value;

    const data = {
      date: this.reservationForm.controls.date.value,
      time: timeObject?.time,
      tableNo: timeObject?.tableNo,
      guestsCount: this.reservationForm.controls.guestsCount.value,
      comment: this.reservationForm.controls.comment.value,
      name: this.reservationForm.controls.name.value,
      phone: this.reservationForm.controls.phone.value,
    };

    this.reservationService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        if (res.error === false) {
          alert('reservation is successfull');
        } else {
          alert('an error occured, please try again');
        }
      },
      error: (e) => console.error(e),
    });
  }
}
