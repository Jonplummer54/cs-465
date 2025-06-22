import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripList } from './trip-list/trip-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripList], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
