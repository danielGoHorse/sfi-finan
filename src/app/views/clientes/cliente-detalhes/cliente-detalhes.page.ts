import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.page.html',
  styleUrls: ['./cliente-detalhes.page.scss'],
})
export class ClienteDetalhesPage implements OnInit {

  private clienteId: string = null;
  private clienteSubscription: Subscription;
  private cliente: Cliente = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
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

}
