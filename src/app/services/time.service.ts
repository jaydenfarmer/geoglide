import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  getTimeForTimezone(timezone: string): string {
    return DateTime.now().setZone(timezone).toFormat('HH:mm:ss');
  }
}
