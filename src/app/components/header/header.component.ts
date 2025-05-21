import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  location = output<string>();

  form = new FormGroup({ locations: new FormControl('') });

  onSubmit() {
    if (this.form.controls.locations.value)
      this.location.emit(this.form.controls.locations.value);
  }
}
