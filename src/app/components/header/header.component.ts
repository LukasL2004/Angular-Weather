import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  errorMessage = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  form = new FormGroup({
    location: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
  });

  onSubmit(location: string) {
    if (this.form.controls.location.value) {
      location = this.form.controls.location.value;
    }
    this.router.navigate(['/', location]);
  }
}
