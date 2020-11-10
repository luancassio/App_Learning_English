import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  gameProgress: boolean = true;
  msgGame: string; 

  endGame(end:string): void{
     this.gameProgress =false
     this.msgGame = end;

  }
  restartGame(): void{
    this.gameProgress = true;
    this.msgGame = undefined;
  }
}
