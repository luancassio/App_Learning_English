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

    constructor(){
        
    }
}