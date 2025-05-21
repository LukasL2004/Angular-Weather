import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigAPIService } from './services/config-api.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weather: any;
  location: string = '';
  private configAPIService = inject(ConfigAPIService);

  getLocation(loc: string) {
    this.location = loc;
    this.getWeatherData();
  }

  getWeatherData() {
    this.configAPIService.getWeather(this.location).subscribe((result) => {
      this.weather = result;
      console.log(result);
    });
  }
}
