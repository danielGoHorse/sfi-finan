import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.page.html',
  styleUrls: ['./usuario-registro.page.scss'],
})
export class UsuarioRegistroPage implements OnInit {

  public userLogin: User = {};
  usuario: User = {};
  public userRegister: User = {};
  private loading: any;
  private usuarioId: string = null;

  constructor(public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private usuarioService: UsuarioService,
    private toastCtrl: ToastController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async register() {
    this.presentLoading();
    try {
      await this.authService.register(this.userRegister);
      this.saveUser();
    } catch (error) {

      // let message: string;
      // switch (error.code) {
      //   case 'auth/email-already-in-use':
      //     message = 'E-mail em uso';
      //     break;

      //   case 'auth/invalid-email':
      //     message = 'E-mail invalido';
      //     break;

      // }


      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  async saveUser() {
    await this.presentLoading();
    // this.cliente.userId = (await this.authService.getAuth().currentUser).uid;

    if (this.usuarioId) {

    } else {
      this.usuario.createAdt = new Date().getTime();

      this.loading.dismiss();
    }
    try {
      await this.usuarioService.addUsers(this.userRegister);
      await this.loading.dismiss();
      // this.navCtrl.navigateBack('/cliente-simulacao');

    } catch {
      this.presentToast('Erro ao tentar criar Usuario');
      this.loading.dismiss();
    }



  }

}
