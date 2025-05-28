import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent implements OnInit {
  errorMessage = '';
  DestroyRef = inject(DestroyRef);
  form = new FormGroup({
    location: new FormControl('', {
      validators: Validators.required,
    }),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.DestroyRef))
      .subscribe((params) => {
        if (params['error'] === 'notFound') {
          this.errorMessage =
            "Sorry! We couldn't find any weather data for the location you entered. Please try again.";
        }
      });
  }

  onSubmit(location: string) {
    if (this.form.controls.location.value) {
      location = this.form.controls.location.value;
    }
    this.router.navigate([location]);
  }
}
