import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  private readonly validEmail: string = 'sat@narola.email';
  private readonly validPassword: string = 'nashik@123';
  
  login(email: string, password: string): boolean {
    debugger
    if (email === this.validEmail && password === this.validPassword) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}