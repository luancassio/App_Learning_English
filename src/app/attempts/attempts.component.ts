import { Component, Input, OnChanges } from '@angular/core';
import { element } from 'protractor';
import { Heart } from '../shared/heart.Model';



@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnChanges {

  hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]
  emptyHeart: string = "/assets/coracao_vazio.png";
  fullHeart: string = "/assets/coracao_cheio.png";
  @Input() attempts: number;

  ngOnChanges() {
    try {
      if (this.attempts !== this.hearts.length) {
        let i = this.hearts.length - this.attempts
        this.hearts[i - 1].full = false

        if (this.attempts === 0) {
          for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].full = true;
          }
        }
      }
    } catch (error) {
      console.log("Attempts", error)
    }

  }


}






