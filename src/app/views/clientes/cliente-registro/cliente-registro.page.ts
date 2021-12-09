import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { DadosFinanciamento } from 'src/app/models/dados-financiamento';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.page.html',
  styleUrls: ['./cliente-registro.page.scss'],
})
export class ClienteRegistroPage implements OnInit {

  cliente: Cliente = {};
  private loading: any;
  private clienteId: string = null;
  private clienteSubscription: Subscription;
  // clienteFinanciamento: Cliente;
  dadosFinanciamento: DadosFinanciamento = {};


  constructor(
    public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,
    private clientesService: ClienteService,
    private navCtrl: NavController
  ) {
    this.clienteId = this.activeRoute.snapshot.params['id'];
    if (this.clienteId) {
      this.loadCliente();
    }
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.dadosFinanciamento = (this.clientesService.getToDadosFinan() ? this.clientesService.getToDadosFinan() : new DadosFinanciamento());

  }

  ngOnDestroy() {
    if (this.clienteSubscription) this.clienteSubscription.unsubscribe();
  }

  loadCliente() {
    this.clienteSubscription = this.clientesService.getCliente(this.clienteId).subscribe(data => {
      this.cliente = data;
    });
  }

  async saveCliente() {
    await this.presentLoading();
    // this.cliente.userId = (await this.authService.getAuth().currentUser).uid;

    if (this.clienteId) {

    } else {
      this.cliente.createAdt = new Date().getTime();
      this.cliente.localImovel = this.dadosFinanciamento.localImovel;
      this.cliente.prazo = this.dadosFinanciamento.prazo;
      this.cliente.valorImovel = this.dadosFinanciamento.valorImovel;
      this.cliente.valorEntrada = this.dadosFinanciamento.valorEntrada;
      this.loading.dismiss();
    }
    try {
      await this.clientesService.addClientes(this.cliente);
      await this.loading.dismiss();
      this.navCtrl.navigateBack('/cliente-simulacao');

    } catch {
      this.presentToast('Erro ao tentar criar cliente');
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


}
