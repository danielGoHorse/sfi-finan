import { AuthGuard } from './../guards/auth.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  showButton: boolean = true;

  constructor(
    public router: Router,
    private authGuard: AuthGuard
  ) {
    this.authGuard.emitirUserLogado.subscribe(
      show => this.showButton = show
    );
  }

  ngOnInit() {

  }


}
