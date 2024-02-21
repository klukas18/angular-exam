import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';

@Component({
  selector: 'app-tetris-game',
  standalone: true,
  imports: [CommonModule, TetrisCoreModule],
  templateUrl: './tetris-game.component.html',
  styleUrl: './tetris-game.component.scss',
})
export class TetrisGameComponent {
  @Input() tileSize: any = '25px';
  @Input() initialSpeed: number = 500;
  @Input() start: boolean = false;
  @Input() stop: boolean = false;
  @Input() reset: boolean = false;
  @Input() moveLeft: boolean = false;
  @Input() moveRight: boolean = false;
  @Input() moveDown: boolean = false;
  @Input() drop: boolean = false;
  @Input() rotate: boolean = false;

  @Output() gameEnded = new EventEmitter<void>();
  @Output() lineCleared = new EventEmitter<void>();
  @Output() gameOver = new EventEmitter();

  endGame() {
    this.gameEnded.emit();
  }
  onLineCleared() {
    this.lineCleared.emit();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
      case 'A':
        this.onLeftButtonPressed();
        break;
      case 'd':
      case 'D':
        this.onRightButtonPressed();
        break;
      case 's':
      case 'S':
        this.onDownButtonPressed();
        break;
      case ' ':
        this.onRotateButtonPressed();
        break;
      case 'w':
      case 'W':
        this.onDropButtonPressed();
        break;
    }
  }

  @ViewChild(TetrisCoreComponent)
  private _tetris!: TetrisCoreComponent;

  public onStartButtonPressed() {
    this._tetris.actionStart();
  }

  public onStopButtonPressed() {
    this._tetris.actionStop();
  }

  public onResetButtonPressed() {
    this._tetris.actionReset();
  }

  public onLeftButtonPressed() {
    this._tetris.actionLeft();
  }

  public onDownButtonPressed() {
    this._tetris.actionDown();
  }
  public onRightButtonPressed() {
    this._tetris.actionRight();
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }

  public onDropButtonPressed() {
    this._tetris.actionDrop();
  }
}
