
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { NgSignalDirective } from '../shared/ngSignal.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TranslocoModule, NgSignalDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  email = signal("");
  password = signal("");
  username = signal("");
  errorMessage = signal("");
  usernameError = signal("");
  emailError = signal("");
  passwordError = signal("");

  constructor(private authService: AuthService, private router: Router) {}

  validateInputs(): boolean {
    let isValid = true;
    const usernameRegex = /^.{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    if (!usernameRegex.test(this.username())) {
      this.usernameError.set("Benutzername: mindestens 5 Zeichen lang.");
      isValid = false;
    } else {
      this.usernameError.set("");
    }

    if (!emailRegex.test(this.email())) {
      this.emailError.set("E-Mail: soll im Format einer E-Mail sein.");
      isValid = false;
    } else {
      this.emailError.set("");
    }

    if (!passwordRegex.test(this.password())) {
      this.passwordError.set("Passwort: mindestens 5 Zeichen lang und muss 1 Groß- und 1 Kleinbuchstaben beinhalten.");
      isValid = false;
    } else {
      this.passwordError.set("");
    }

    return isValid;
  }


trySignUp(): void {
  if (this.validateInputs()) {
    this.loading = true;
    this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
      next: (response) => {
        this.router.navigateByUrl("/function-overview");
      },
      error: (error) => {
        if (error.status === 400) {
          this.errorMessage.set(error.error.message || "Email wird bereits verwendet.");
        } else {
          this.errorMessage.set("Registrierung fehlgeschlagen. Bitte versuche es später erneut.");
        }
        this.loading = false;
        setTimeout(() => this.errorMessage.set(""), 5000);
      }
    });
  }
}


  tryLogin(): void {
    this.loading = true;
    this.authService.login(this.username(), this.email(), this.password()).subscribe({
        next: (response) => {
            this.router.navigateByUrl("/function-overview");
        },
        error: (error) => {
            this.errorMessage.set("Email oder Password falsch"); 
            this.loading = false;
            setTimeout(() => this.errorMessage.set(""), 10000);
        }
    });
  }
}