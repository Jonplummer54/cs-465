import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService, Trip } from '../trip-data.service';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripList implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data: Trip[]) => this.trips = data,
      error: (err: any) => console.error('Failed to fetch trips', err)
    });
  }
}
