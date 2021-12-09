import { AuthGuard } from './../../guards/auth.guard';
import { VerificaAcesso } from './../../models/verificaAcesso';
import { User } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  showMenu: boolean = false;

  constructor(private menu: MenuController,
    private authService: AuthService,
    public router: Router,
    private authGuard: AuthGuard) {
    this.authGuard.emitirUserLogado.subscribe(
      show => this.showMenu = show
    );
  }

  ngOnInit() {

  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  rotas(param: any) {
    // let local = param;
    this.router.navigate([param]);
    this.menu.close();
  }

  async logout() {
    try {
      await this.authService.logout();
      this.authGuard.emitirUserLogado.subscribe(
        show => this.showMenu = show
      );
      this.menu.close();
      this.router.navigate(['/login'])
    } catch (error) {
      console.error(error);
      this.menu.close();
    }
  }
}
