import { Component, signal } from '@angular/core';
import { LeadIntake } from './lead-intake/lead-intake';

@Component({
  selector: 'app-root',
  imports: [LeadIntake],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lead-intake-portfolio');
}
