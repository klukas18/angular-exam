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
  name = '';
  email = '';

  @Output() gameStarted = new EventEmitter<void>();

  startGame() {
    this.gameStarted.emit();
  }
}
