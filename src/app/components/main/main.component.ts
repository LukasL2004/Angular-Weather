import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ConfigAPIService } from '../../services/config-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  weather: any;
  location: string = '';
  private configAPIService = inject(ConfigAPIService);
  destroyRef = inject(DestroyRef);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((param) => {
        this.location = param.get('location')!;
        this.getWeatherData();
      });
  }

  getWeatherData() {
    this.configAPIService.getWeather(this.location).subscribe({
      next: (result) => {
        this.weather = result;
        console.log(result);
      },
      error: (err) => {
        console.error('Eroare API:', err);
        this.router.navigate(['/'], { queryParams: { error: 'notFound' } });
      },
    });
  }
}
