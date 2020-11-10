import { Component } from '@angular/core'
import { Phrase } from '../shared/phrase.model'
import { phrases } from './phrase-mock'

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {

    instruction: string = "Traduza a frase:"
    p: Phrase[] = phrases;
    answer: string = "";
    round: number = 0;
    roundPhrases: Phrase;
    progress: number = 0
    attempts = 3;

    constructor() {

        this.updateRound();
    }

    //captura a frase digitada pelo usuario
    updateResponse(capturedText: Event): void {

        this.answer = (<HTMLInputElement>capturedText.target).value;
    }

    //define frase da rodada e limpra o textarea
    updateRound() {
        this.roundPhrases = this.p[this.round];
        this.answer = "";

    }

    //verifica se a resposta digitada e mesma que tem no mock
    checkAnswer(): void {

        try {

            if (this.roundPhrases.phrasePortuguese.toLowerCase().trim() == this.answer.toLowerCase().trim()) {
                this.round = Math.floor(Math.random() * this.p.length);

                alert("Parabéns você acertou!")
                this.progress = this.progress + 20;
                this.updateRound()

                if (this.progress === 100) {
                    alert("Parabéns Você Ganhou :)")
                    this.updateRound()
                    this.progress = 0
                }

            }else {
                alert("Ops você errou!");
                this.attempts--;    
                if (this.attempts === 0) {
                    alert("Você perdeu tem novamente :(")
                    this.updateRound()
                    this.progress = 0; 
                }
            }
        } catch (error) {
                console.log("checkAswers", error)
            }
        }
    } 

