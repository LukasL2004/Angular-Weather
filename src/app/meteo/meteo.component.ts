import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';

@Component({
  selector: 'app-meteo',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css',
})
export class MeteoComponent {}
