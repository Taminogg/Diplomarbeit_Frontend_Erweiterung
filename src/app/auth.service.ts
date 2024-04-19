import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInService } from './shared/swagger';
import { UserDto } from '../app/shared/swagger/model/userDto'; // Pfad zu deinem UserDto anpassen

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService: LogInService) {}

  login(userName: string, email: string, password: string): Observable<any> {
    // Angenommen, apiLogInLoginPost erwartet ein Objekt vom Typ UserDto
    let userDto: UserDto = {userName: userName, email: email, password: password };
    return this.loginService.logInLoginPost(userDto);
  }

  signUp(username: string, email: string, password: string): Observable<any> {
    // Angenommen, apiLogInRegisterPost erwartet ein Objekt vom Typ UserDto
    let userDto: UserDto = { userName: username, email: email, password: password };
    return this.loginService.logInRegisterPost(userDto);
  }
}
