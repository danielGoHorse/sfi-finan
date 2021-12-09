import { AuthGuard } from './../../../guards/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { DadosFinanciamento } from 'src/app/models/dados-financiamento';
import { ClienteService } from 'src/app/services/cliente.service';
import { ESTADOS, PRAZOS } from 'src/app/services/combo.service';

@Component({
  selector: 'app-cliente-financiamento',
  templateUrl: './cliente-financiamento.page.html',
  styleUrls: ['./cliente-financiamento.page.scss'],
})
export class ClienteFinanciamentoPage implements OnInit {

  dadosFinanciamento = new DadosFinanciamento();
  dadosFinanciamentos!: DadosFinanciamento[];

  estados = ESTADOS;
  prazos = PRAZOS;
  tipoAcesso: any;

  constructor(
    public router: Router,
    public clienteService: ClienteService,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
  }

  simular(dadosFinanciamento: DadosFinanciamento) {
    let minImov = 100000;
    let minEnt = 1;
    if (this.dadosFinanciamento.valorImovel &&
      this.dadosFinanciamento.valorEntrada &&
      this.dadosFinanciamento.localImovel &&
      this.dadosFinanciamento.prazo) {





      setTimeout(() => {
        this.dadosFinanciamento = { ...this.dadosFinanciamento }
        this.clienteService.selectCliente(dadosFinanciamento);
        this.router.navigate(['/cliente-registro']);
      }, 2000);
    } else {
      alert("ERRO")
    }






  }
}