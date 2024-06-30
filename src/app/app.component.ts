import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { StrengthSectionComponent } from './strength-section/strength-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PasswordFieldComponent,
    StrengthSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'password-validation';
  sections: string[] = ['gray', 'gray', 'gray'];

  updateStrength(sections: string[]) {
    this.sections = sections;
  }
}
