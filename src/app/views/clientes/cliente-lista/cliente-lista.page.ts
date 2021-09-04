import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.page.html',
  styleUrls: ['./cliente-lista.page.scss'],
})
export class ClienteListaPage implements OnInit {

  private clientes = new Array<Cliente>();
  private clienteSubscription: Subscription;
  private loading: any;

  constructor(
    public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,
    private navCtrl: NavController,
    private clienteService: ClienteService
  ) {
    this.clienteSubscription = this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.clienteSubscription.unsubscribe();
  }

  async sair() {
    this.router.navigate(['/home'])
  }

  async deleteCliente(id: string) {
    try {
      await this.clienteService.deleteCliente(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar cliente');
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

}
