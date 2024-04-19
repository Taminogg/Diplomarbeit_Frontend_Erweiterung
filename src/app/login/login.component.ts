
//region "Verworfen"

// import { Component, OnInit, inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { TranslocoModule } from '@ngneat/transloco';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, TranslocoModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   loading: boolean = false;

//   constructor(private router: Router) {}

//   ngOnInit() {
//   }

//   tryLogin() {
//     this.loading = true;
//     setTimeout(() => {
//       this.router.navigateByUrl("/function-overview");
//       this.loading = false;
//     }, 4000); // Simuliere einen Login-Prozess mit einer Verzögerung
//   }

//   trySignUp() {
//     this.loading = true;
//     setTimeout(() => {
//       this.router.navigateByUrl("/function-overview");
//       this.loading = false;
//     }, 4000); // Simuliere einen Registrierungsprozess mit einer Verzögerung
//   }
// }
 // tryLogin(): void {
  //   this.loading = true;
  //   this.authService.login(this.username(), this.email(), this.password()).subscribe({
  //     next: (response) => {
  //       // Hier könntest du den JWT-Token speichern und/oder den Nutzer navigieren
  //       console.log(response);
  //       this.router.navigateByUrl("/function-overview");
  //     },
  //     error: (error) => {
  //       console.error('Login fehlgeschlagen:', error);
  //     },
  //     complete: () => this.loading = false
  //   });
  // }

  // trySignUp(): void {
  //   this.loading = true;
  //   this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
  //     next: (response) => {
  //       console.log('Registrierung erfolgreich', response);
  //       // Eventuell nach erfolgreicher Registrierung automatisch einloggen oder eine Bestätigungsnachricht anzeigen
  //       this.router.navigateByUrl("/function-overview");
  //     },
  //     error: (error) => {
  //       console.error('Registrierung fehlgeschlagen:', error);
  //     },
  //     complete: () => this.loading = false
  //   });
  // }

//   tryLogin(): void {
//     this.loading = true;
//     this.authService.login(this.username(), this.email(), this.password()).subscribe({
//       next: (response) => {
//         this.router.navigateByUrl("/function-overview");
//       },
//       error: (error) => {
//         this.errorMessage.set('Login fehlgeschlagen.');
//         this.loading = false;
//       }
//     });
// }

// trySignUp(): void {
//     this.loading = true;
//     this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
//       next: (response) => {
//         this.router.navigateByUrl("/function-overview");
//       },
//       error: (error) => {
//         if(error.status === 400) {
//           this.errorMessage.set('E-Mail bereits verwendet.');
//         } else {
//           this.errorMessage.set('Registrierung fehlgeschlagen.');
//         }
//         this.loading = false;
//       }
//     });
// }

// tryLogin(): void {
//   this.loading = true;
//   this.authService.login(this.username(), this.email(), this.password()).subscribe({
//       next: (response) => {
//           // Erfolgreiche Anmeldung
//           this.router.navigateByUrl("/function-overview");
//       },
//       error: (error) => {
//           this.errorMessage.set("Deine Fehlermeldung hier"); // Setze eine spezifische Fehlermeldung
//           this.loading = false;
//       }
//   });
// }

// trySignUp(): void {
//   this.loading = true;
//   this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
//       next: (response) => {
//           // Erfolgreiche Registrierung
//           this.router.navigateByUrl("/function-overview");
//       },
//       error: (error) => {
//           this.errorMessage.set("Deine Fehlermeldung hier"); // Setze eine spezifische Fehlermeldung
//           this.loading = false;
//       }
//   });
// }
//#endregion "Verworfen"
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

  // trySignUp(): void {
  //   if (this.validateInputs()) {
  //     this.loading = true;
  //     this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
  //       next: (response) => {
  //         this.router.navigateByUrl("/function-overview");
  //       },
  //       error: (error) => {
  //         this.errorMessage.set("Email bereits in Verwendung");
  //         this.loading = false;
  //         setTimeout(() => this.errorMessage.set(""), 5000);
  //       }
  //     });
  //   }
  // }
//   trySignUp(): void {
//     if (this.validateInputs()) {
//         this.loading = true;
//         this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
//             next: (response) => {
//                 // Erfolgreiche Registrierung
//                 this.router.navigateByUrl("/function-overview");
//             },
//             error: (error) => {
//                 if (error.status === 400) {
//                     // Annahme: Der Fehler-Response enthält einen Body mit einer Fehlermeldung
//                     // Du musst eventuell den Pfad anpassen, je nachdem wie deine API den Fehler zurückgibt
//                     this.errorMessage.set(error.error.message || "Email wird bereits verwendet");
//                 } else {
//                     this.errorMessage.set("Registrierung fehlgeschlagen.");
//                 }
//                 this.loading = false;
//                 setTimeout(() => this.errorMessage.set(""), 5000);
//             }
//         });
//     }
// }

trySignUp(): void {
  if (this.validateInputs()) {
    this.loading = true;
    this.authService.signUp(this.username(), this.email(), this.password()).subscribe({
      next: (response) => {
        // Erfolgreiche Registrierung, Nutzer zur Überblicksseite weiterleiten
        this.router.navigateByUrl("/function-overview");
      },
      error: (error) => {
        // Hier prüfen wir auf spezifische Fehlercodes und setzen entsprechende Fehlermeldungen
        if (error.status === 400) {
          // Annahme: Der Fehler-Response enthält eine spezifische Fehlermeldung
          this.errorMessage.set(error.error.message || "Email wird bereits verwendet.");
        } else {
          // Für alle anderen Fehler zeigen wir eine allgemeine Fehlermeldung
          this.errorMessage.set("Registrierung fehlgeschlagen. Bitte versuche es später erneut.");
        }
        this.loading = false;
        // Fehlermeldung nach 5 Sekunden automatisch zurücksetzen
        setTimeout(() => this.errorMessage.set(""), 5000);
      }
    });
  }
}


  tryLogin(): void {
    this.loading = true;
    this.authService.login(this.username(), this.email(), this.password()).subscribe({
        next: (response) => {
            // Erfolgreiche Anmeldung
            this.router.navigateByUrl("/function-overview");
        },
        error: (error) => {
            this.errorMessage.set("Email oder Password falsch"); // Setze eine spezifische Fehlermeldung
            this.loading = false;
            setTimeout(() => this.errorMessage.set(""), 10000); // Lösche die Fehlermeldung nach 5 Sekunden
        }
    });
  }
}
