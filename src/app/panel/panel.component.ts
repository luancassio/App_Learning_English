import { Component } from '@angular/core'
import { Phrase } from '../shared/phrase.model'
import { phrases } from './phrase-mock'

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent{
    
instruction: string = "Traduza a frase:"
p: Phrase[] = phrases;
answer: string;
round: number = 0;
roundPhrases: Phrase;
progress: number = 0

    constructor(){

        this.roundPhrases = this.p[this.round];
        console.log(this.round)

    }

    updateResponse(capturedText: Event): void {

        this.answer = (<HTMLInputElement>capturedText.target).value;
    }

    checkAnswer(): void{
        if (this.roundPhrases.phrasePortuguese.toLowerCase().trim() == this.answer.toLowerCase().trim()) {
            this.round = Math.floor(Math.random() * this.p.length);

            alert("Parabéns você acertou!")
            this.roundPhrases = this.p[this.round];
            this.progress = this.progress + (this.p.length /10);
            //this.progress = this.progress + 25; 
            
console.log(this.progress = this.progress + (this.p.length /10))
        } else {
            alert("Ops você errou!")
            
        }
  

    }
}