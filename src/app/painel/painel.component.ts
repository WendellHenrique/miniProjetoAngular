import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { frases } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases1: Frase[] = frases
  public instrucao: String = 'Traduza a frase abaixo: '
  public resposta: String

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases1[this.rodada]
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    //trocar pergunta da rodada
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++
      this.rodadaFrase = this.frases1[this.rodada]
      alert("A traducao esta certa!!")
    } else {
      alert("A traducao esta errada!!")
    }


  }

}
