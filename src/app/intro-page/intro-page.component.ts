import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {
  @Output() gameStarted = new EventEmitter<{
    name: string;
    email: string;
  }>();

  startGame(data: { name: string; email: string }) {
    this.gameStarted.emit(data);
  }
}
