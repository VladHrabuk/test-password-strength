import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'password-field',
  standalone: true,
  imports: [],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
  password: string = '';
  sections: string[] = ['grey', 'grey', 'grey'];
  @Output() strengthChange = new EventEmitter<string[]>();

  onPasswordInput(event: any) {
    this.password = event.target.value;
    this.strengthChange.emit(this.calculateStrength());
  }

  calculateStrength(): string[] {
    const length = this.password.length;

    if (length === 0) {
      return ['grey', 'grey', 'grey'];
    } else if (length < 8) {
      return ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasNumbers = /[0-9]/.test(this.password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        return ['green', 'green', 'green'];
      } else if (
        (hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols)
      ) {
        return ['yellow', 'yellow', 'grey'];
      } else {
        return ['red', 'grey', 'grey'];
      }
    }
  }
}
