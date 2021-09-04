import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.page.html',
  styleUrls: ['./cliente-detalhes.page.scss'],
})
export class ClienteDetalhesPage implements OnInit {

  private clienteId: string = null;
  private clienteSubscription: Subscription;
  private cliente: Cliente = {};
  private cordova: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    public router: Router,
    public platform: Platform,
  ) {
    this.clienteId = this.activatedRoute.snapshot.params['id'];
    if (this.clienteId) this.loadCliente();
  }
  loadCliente() {
    this.clienteSubscription = this.clienteService.getCliente(this.clienteId).subscribe(data => {
      this.cliente = data;
    })
  }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/cliente-lista'])
  }

  chat() {

    this.platform.ready().then(() => {

      this.cordova.plugins.Whatsapp.send('+263783187321');

    });

  }



}
