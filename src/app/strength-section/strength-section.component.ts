import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'strength-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-section.component.html',
  styleUrl: './strength-section.component.scss',
})
export class StrengthSectionComponent {
  @Input() color: string = 'grey';
}
