import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { frases } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases1: Frase[] = frases
  public instrucao: String = 'Traduza a frase abaixo: '
  public resposta: String = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    //trocar pergunta da rodada
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++

      //atualizar a barra de progresso
      this.progresso = this.progresso + 25

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()


    } else {
      this.tentativas--

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }



  }
  public atualizaRodada(): void {
    //define a frase da rodada
    this.rodadaFrase = this.frases1[this.rodada]
    //limpar resposta
    this.resposta = ''
    //console.log(this.rodadaFrase)

  }

}


