import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';

@Component({
  selector: 'app-tetris-game',
  standalone: true,
  imports: [CommonModule, FormsModule, TetrisCoreModule],
  templateUrl: './tetris-game.component.html',
  styleUrl: './tetris-game.component.scss',
})
export class TetrisGameComponent {
  @Input() name: string = '';
  @Input() email: string = '';

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

  clearedLinesCount: number = 0;
  gameStatus: string = 'READY';
  gameStartTime!: number;
  gameEndTime!: number;
  timePassed: number = 0;

  endGame() {
    this.gameEnded.emit();
    this.gameStatus = 'ENDED';
    this.gameEndTime = Date.now();
    this.timePassed += this.gameEndTime - this.gameStartTime;
  }

  getTimeSpent()  {
    const minutes = Math.floor(this.timePassed / 60000);
    const seconds = ((this.timePassed % 60000) / 1000).toFixed(0);
    return `${minutes} : ${seconds}`;
  }

  onLineCleared() {
    this.lineCleared.emit();
    this.clearedLinesCount++;
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
    this.gameStatus = 'PLAYING';
    this.gameStartTime = Date.now();
  }

  public onStopButtonPressed() {
    this._tetris.actionStop();
    this.gameStatus = 'PAUSED';
    this.gameEndTime = Date.now();
    this.timePassed += this.gameEndTime - this.gameStartTime;
  }

  public onResetButtonPressed() {
    this._tetris.actionReset();
    this.gameStatus = 'READY';
    this.gameEndTime = Date.now();
    this.timePassed = 0;
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
