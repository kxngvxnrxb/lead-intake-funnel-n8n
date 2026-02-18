import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-intake',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lead-intake.html',
  styleUrl: './lead-intake.scss',
})
export class LeadIntake {
  private readonly webhookUrl = 'http://localhost:5678/webhook/7d5ff433-043a-4474-89c2-4c69209e8cbe';

  isSubmitting = false;
  success = false;
  error = '';
  form;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      service: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      preferredContact: ['Email', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false, [Validators.requiredTrue]],
    });

  }

  submit() {
    this.success = false;
    this.error = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.webhookUrl || this.webhookUrl.includes('PASTE_')) {
      this.error = 'Webhook URL not set. Paste your n8n webhook URL in the component.';
      return;
    }

    this.isSubmitting = true;

    const payload = {
      ...this.form.getRawValue(),
      submittedAt: new Date().toISOString(),
      source: 'Angular Lead Intake Funnel',
      userAgent: navigator.userAgent,
    };

    this.http.post(this.webhookUrl, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.success = true;
        this.form.reset();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.error =
          'Failed to submit. Check your webhook URL and that n8n returns HTTP 200. ' +
          (err?.message ? `(${err.message})` : '');
      },
    });
  }
}
