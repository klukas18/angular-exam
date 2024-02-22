import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisGameComponent } from './tetris-game/tetris-game.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IntroPageComponent, TetrisGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tetris-app';

  name: string = '';

  showIntro = true;
  showGame = false;

  handleGameStarted(data: { name: string; email: string }) {
    this.name = data.name;
    this.showIntro = false;
    this.showGame = true;
  }

  handleGameEnded() {
    this.showIntro = true;
    this.showGame = false;
  }
}
