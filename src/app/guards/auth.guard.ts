import { VerificaAcesso } from '../models/verificaAcesso';
import { User } from './../interfaces/user';
import { EventEmitter, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  emitirUserLogado = new EventEmitter<boolean>();


  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.emitirUserLogado.emit(true);

        } else if (!user) {
          this.emitirUserLogado.emit(false);

        }
        resolve(user ? true : true); //se tiver user permite, senão, permite tbm
      });
    });
  }
}
