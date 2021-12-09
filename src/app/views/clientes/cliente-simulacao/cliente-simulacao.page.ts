import { SimulacaoService } from './../../../services/simulacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-simulacao',
  templateUrl: './cliente-simulacao.page.html',
  styleUrls: ['./cliente-simulacao.page.scss'],
})
export class ClienteSimulacaoPage implements OnInit {
  dadosBradesco: any;

  constructor(private simulacaoService: SimulacaoService) { }

  ngOnInit() {
    this.getDados()
  }

  getDados() {
    // this.planosList = [];
    this.simulacaoService.get().subscribe(
      data => {
        this.dadosBradesco = data;


      },
      err => {
        console.log('Erro ao listar Planos')
      }
    )
  }

}
